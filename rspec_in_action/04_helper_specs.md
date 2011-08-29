<!SLIDE full-page>

## Helper specs ##

### Placed under spec/helpers directory ###

    @@@ Ruby
    describe CampaignsHelper do
      let(:campaign) { Factory.stub(:campaign) }
      let(:file_name) { "meldung.jpg" }
      
      it "should return the same attachment URL as paperclip if there is no attachment" do
        campaign.stub(:featured_image_file_name).and_return(nil)
        helper.campaign_attachment_url(campaign, :featured_image).should eql(campaign.featured_image.url)
      end
      
      it "should return the same attachment URL as paperclip if there is attachment" do
        campaign.stub(:featured_image_file_name).and_return(file_name)
        helper.campaign_attachment_url(campaign, :featured_image).should eql(campaign.featured_image.url)
      end
      
    end