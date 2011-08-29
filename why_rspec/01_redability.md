!SLIDE full-page

## Readability ##

    @@@ Ruby
    describe Campaign do
      
      it "should be visible by default" do
        campaign.should be_visible
      end
      
      it "should have performances visible by default" do
        campaign.performances_visible.should be_true
      end
    
      it "should not be published at start" do
        campaign.should_not be_published
      end
    
      it "should not be ready to publish at start - without performances, etc" do
        campaign.should_not be_ready_to_publish
      end
      
      describe "#allowed_performance_kinds" do
        it "should allow all by default" do
          campaign.allowed_performance_kinds.should == Performance.kinds
        end
      end
    end