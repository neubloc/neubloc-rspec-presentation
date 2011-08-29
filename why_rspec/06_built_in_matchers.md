<!SLIDE full-page>

## Built-in matchers ##

    @@@ Ruby
    target.should satisfy {|arg| ...}                   lambda {a_call}.should raise_error
    target.should_not satisfy {|arg| ...}               lambda {a_call}.should raise_error(<exception> [, message])
    target.should equal <value>                         lambda {a_call}.should_not raise_error
    target.should not_equal <value>                     lambda {a_call}.should_not raise_error(<exception> [, message])
    target.should be_close <value>, <tolerance>         proc.should throw <symbol>
    target.should_not be_close <value>, <tolerance>     proc.should_not throw <symbol>
    target.should be <value>                            target.should include <object>
    target.should_not be <value>                        target.should_not include <object>
    target.should predicate [optional args]             target.should have(<number>).things
    target.should be_predicate [optional args]          target.should have_at_least(<number>).things
    target.should_not predicate [optional args]         target.should have_at_most(<number>).things
    target.should_not be_predicate [optional args]      target.should have(<number>).errors_on(:field)
    target.should be < 6                                expect { thing.approve! }.to change(thing, :status).
    target.should be_between(1, 10)                                               from(Status::AWAITING_APPROVAL).
    target.should match <regex>                                                   to(Status::APPROVED)
    target.should_not match <regex>                     expect { thing.destroy }.to change(Thing, :count).by(-1)
    target.should be_an_instance_of <class>
    target.should_not be_an_instance_of <class>
    target.should be_a_kind_of <class>
    target.should_not be_a_kind_of <class>
    target.should respond_to <symbol>
    target.should_not respond_to <symbol>
    
    
    
    
    
    
    
        
        
    

    