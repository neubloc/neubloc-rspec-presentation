<!SLIDE full-page>

## Facebook testing example ##

<!SLIDE full-page>

## Facebook wall messages JSON response ##
   
    @@@ JavaScript
 	  {
 	    "data": [
 	         {
 	           "id": "100001931951713_187401811278779",
 	           "from": {
 	               "name": "Stefan Lorek",
 	               "id": "100001931951713"
                     }  ,
 	            "message": "test",
 	            "actions": [
 	                 {
 	               "name": "Comment",
 	               "link": "http://www.facebook.com/100001931951713/posts/187401811278779"
 	                 },
 	                 {
 	               "name": "Like",
 	               "link": "http://www.facebook.com/100001931951713/posts/187401811278779"
 	                 }
 	               ],
 	           "privacy": {
 	               "description": "Everyone",
 	               "value": "EVERYONE"
                  },
 	            "type": "status",
 	            "created_time": "2011-01-21T18:32:34+0000",
 	            "updated_time": "2011-01-21T18:32:34+0000",
 	            "attribution": "peoplejar"
 	         }
 	      ],
    }	

<!SLIDE full-page>

## Stubbing Facebook integration library ##

    @@@ Ruby
    describe Social::Facebook do
      describe "#get_wall_messages" do
    
        it "should return nil when user is unauthorized" do
          user.facebook.get_wall_messages.should be_nil
        end
    
        describe "message" do
          before do
            FakeWeb.register_uri(:get, Regexp.new("https://graph.facebook.com/me/feed*"), :body => fixture_file("fb_message.json"))
          end
          let(:message) { facebook_user.facebook.get_wall_messages[0] }
    
          it "should return well formatted messages" do
            message.should respond_to(:created_at, :id, :type, :user_name, :body)
          end
    
          it "should have user_name like in example file" do
            message.user_name.should == "Stefan Lorek"
          end
    
          it "should have body like in example file" do
            message.body.should == "test"
          end
    
          it "should have created_at like in example file" do
            message.created_at.should == DateTime.parse("2011-01-21T18:32:34+0000")
          end
    
          it "should return nil when remote server returns error" do
            FakeWeb.register_uri(:get, Regexp.new("https://graph.facebook.com/me/feed*"), :status => "500")
            facebook_user.facebook.get_wall_messages.should be_nil
          end
        end
      end
    end
    
