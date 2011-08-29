<!SLIDE full-page>

## Stubs in action ##

    @@@ Ruby
    User.stub(:new)   # => nil
    User.stub(:new).and_return(true)
    
    user_object = User.new
    user_object.stub(:save).and_return(true)
    User.stub(:new).and_return(user_object)
    
    
    user_object.stub(:update_attributes).with(:username => "test").and_return(true)
    User.stub(:new).and_return(user_object)
    
    User.any_instance.stub(:save).and_return(true) # !
    
    # User.active.paginate
    User.stub_chain(:active, :paginate).and_return([user_object])
    
    user_object.stub(:set_permissions).with(an_instance_of(String), anything).and_return(true)
    user_object.unstub(:set_permissions)
    # user_object.set_permissions("admin", true) # => true (will use stubbed method)
    # user_object.set_permissions("admin") # => false (will call real method)
