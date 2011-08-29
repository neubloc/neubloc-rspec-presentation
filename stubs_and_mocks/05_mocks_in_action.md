<!SLIDE full-page>

## Mocks in action ##

    @@@ Ruby
    User.should_receive(:new)   # => nil
    User.should_receive(:new).and_return(true)
    User.should_not_receive(:new)
    
    user_object = User.new
    user_object.should_receive(:save).and_return(true)
    User.stub(:new).and_return(user_object)
    
    
    user_object.should_receive(:update_attributes).with(:username => "test").and_return(true)
    User.stub(:new).and_return(user_object)
    
    User.any_instance.should_receive(:save).and_return(true) # !
    
    user_object.should_receive(:update_attributes).once # default
    user_object.should_receive(:update_attributes).twice
    user_object.should_receive(:update_attributes).exactly(3).times
    
    user_object.should_receive(:set_permissions).with(an_instance_of(String), anything)
    # user_object.set_permissions("admin", true) # Success
    # user_object.set_permissions("admin") # Fail