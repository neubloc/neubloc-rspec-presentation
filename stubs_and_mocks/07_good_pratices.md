<!SLIDE full-page>

## Break logic into small functions that can be stubbed ##

    @@@ Ruby
    class Facebook < Devise::Strategies::Base

      def authenticate!
          begin
            user = User.authenticate_with_facebook_connect(:uid => session[:facebook_uid])
            if user.present?
              success!(user)
            else
              facebook_data = get_facebook_data
              if User.where(:email => facebook_data["email"]).exists?
                update_old_account(facebook_data)
              else
                create_new_account(facebook_data)
              end
            end
          rescue => e
            fail!(e.message)
          end
        end
  
        def create_new_account(facebook_data)
          ...
        end
      
        def update_old_account(facebook_data)
          ...
        end
      
        def get_facebook_data
          ...
        end    
      end
      
      
<!SLIDE full-page>
  
## Break logic into small functions that can be stubbed ##

    @@@ Ruby
    class Facebook < Devise::Strategies::Base

      def authenticate!
        populate_data
        begin
          user = user_by_uid || user_by_email || build_user
          user.save!
          update_facebook_settings!(user)
          success!(user)
        rescue => e
          fail!(e.message)
        end
      end
      
      def user_by_uid
        FacebookSetting.where(:uid => session[:facebook_uid]).first.try(:user) 
      end
      
      def user_by_email
        User.where(:email => @facebook_data["email"]).first
      end
      
      def build_user
        User.build_and_store_user_data(@facebook_data, session)
      end
      
      def update_facebook_settings!(user)
        settings = user.find_or_build_facebook_setting
        settings.update_attributes!(:token => session[:facebook_user_info]["access_token"], :uid => session[:facebook_uid])
      end
      
      def populate_data
        @facebook_data = Koala::Facebook::GraphAPI.new(session[:facebook_user_info]["access_token"]).get_object("me")
      end

    end
    
    
<!SLIDE full-page>

## Break logic into small functions that can be stubbed ##

    @@@ Ruby
    describe Devise::Strategies::Facebook do
      before do
        strategy.stub(:session).and_return(stub_session)
      end
      
      describe "#update_facebook_settings!" do
        it "should update user Facebook token and uid" do
          user.facebook_setting.should_receive(:update_attributes!).with({ :token => stub_session[:facebook_user_info]["access_token"], 
                                                                           :uid => stub_session[:facebook_uid] })
          strategy.stub(:user_by_uid).and_return(user)
          strategy.authenticate!
        end
      end
      
      describe "#authenticate!" do
        it "should call #update_facebook_settings! if found user by uid" do
          strategy.should_receive(:update_facebook_settings!).with(user)
          strategy.stub(:user_by_uid).and_return(user)
          strategy.authenticate!
        end
      
        it "should call #update_facebook_settings! if found user by email" do
          strategy.should_receive(:update_facebook_settings!).with(user)
          strategy.stub(:user_by_email).and_return(user)
          strategy.authenticate!
        end
        
        it "should call #build_user when use does not exists" do
          strategy.should_receive(:build_user)
          strategy.stub(:user_by_email).and_return(nil)
          strategy.stub(:user_by_uid).and_return(nil)
          strategy.authenticate!
        end
      end
    end