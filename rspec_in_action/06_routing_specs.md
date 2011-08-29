<!SLIDE full-page>
  
## Routing specs ##
  
### Placed under spec/routing directory ###
  
    @@@ Ruby
    describe "home routing", :type => :controller do
      it "should route / to Home#index" do
        { :get => "/" }.should route_to(:controller => "home", :action => "index", :subdomain => false)
      end
    
      it "should route / with subdomain to Performances::Performances#index" do
        { :get => "http://kzkgop.test.peoplejar.net" }.should route_to(:namespace => nil, :controller => "performances/performances", :action => "index")
      end
    end
    
    describe "error routing", :type => :controller do
      it "should route not existing route Errors#new" do
        { :get => "/not_existing_route" }.should route_to(:controller => "errors", :action => "new", :path => "not_existing_route")
      end
    end
    
    describe "icebreaks routing" do
      it "should route /myjar/icebreaks/initiated to Icebreaks::InitiatedIcebreaks#index" do
      { :get => "/myjar/icebreaks/initiated" }.should route_to(:controller => "icebreaks/initiated_icebreaks", :action => "index")
      end
    end
  
    describe "admin routing" do
      it "should route /admin to Admin::Base#index" do
        { :get => "/admin" }.should route_to(:controller => "admin/welcome", :action => "index")
      end
    end