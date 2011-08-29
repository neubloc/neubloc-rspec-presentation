!SLIDE full-page
## TestUnit ##

    @@@ Ruby
    class Calculator < Test::Unit::TestCase
      def test_addition
        assert_equal(8, Calculator.new(6, 2).addition)
      end
      
      def test_subtraction
        assert_same(4, Calculator.new(6, 2).subtraction)
      end
    end
    
## RSpec ##

    @@@ Ruby
    desribe Calculator do
      let(:calculator) { Calculator.new(6,2) }
      
      it "should return 8 when adding 6 and 2" do
        calculator.addition.should eql(8)
      end
  
      it "should return 4 when subtracting 2 from 6" do
        calculator.subtraction.should eql(4)
      end
    end