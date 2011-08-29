<!SLIDE full-page>

## Test run filters ##

    @@@ Ruby
    def old_ruby
      RUBY_VERSION != "1.9.2"
    end
    
    describe TrueClass do
      it "should be true for true", :if => old_ruby do
        true.should be_true
      end
      
      it "should be true for String", :current => true do
        "".should be_true
      end
      
      it "should be true for Fixnum" do
        0.should be_true
      end
    end

<pre class="console">
$ rspec -f doc spec/lib/true_spec.rb:10 
$ rspec -f doc -l 10 spec/lib/true_spec.rb
$ rspec -f doc -t current spec/lib/true_spec.rb

Run filtered including {:line_number=>11}
Run filtered including {:current=>true}

TrueClass
  <span class="ok">should be true for String</span>

Finished in 0.00138 seconds
<span class="ok">1 example, 0 failures</span>
</pre>