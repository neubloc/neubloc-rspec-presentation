!SLIDE full-page

## RSpec basics ##

    @@@ Ruby
    describe MyClass do                     # creates initial scope
      before do
        @object = MyClass.new  
      end
      
      describe "#some_method" do            # creates new scope
        it "should ..." do
          @object.should ...
        end
        
        context "when authorized" do        # creates new scope
          before do
            @object.authorized = true
          end
          
          it "should ..." do
            @object.should ...
          end
        end
        
        context "when not authorized" do    # creates new scope
          it "should ..." do
            @object.should ...
          end
        end
      end
      
      it "should ..." do
        pending "Fix some model first"      # creates pending test
      end
    end