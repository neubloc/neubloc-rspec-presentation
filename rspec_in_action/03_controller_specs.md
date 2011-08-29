<!SLIDE full-page>

## Controller specs ##

### Placed under spec/controllers directory ###

    @@@ Ruby
    describe SessionsController do
      render_views                          # controller tests stubs views by default unless we don't call this

      describe "CREATE" do
        context "for virtual user" do
          before do
            stub_find_user(virtual_user)
          end
          
          it "should not log into peoplejar" do
            post :create, :user => {:email => virtual_user.email, :password => virtual_user.password }
            response.should_not redirect_to(myjar_dashboard_path)
          end
      
          it "should not log into peoplejar without password" do
            post :create, :user => {:email => virtual_user.email, :password => ""}
            response.should_not redirect_to(myjar_dashboard_path)
          end
        end
        
        context "for regular user" do
          before do
            stub_find_user(active_user)
          end
          
          it "should redirect to myjar when login data is correct" do
            post :create, :user => {:email => active_user.email, :password => active_user.password }
            response.should redirect_to(myjar_dashboard_path)
          end
          
        end
        