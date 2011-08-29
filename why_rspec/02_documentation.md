!SLIDE full-page

## Tests documentation and failure messages ##

<pre class="console">
$ rspec -f doc spec/models/campaigns_spec.rb

Campaign
  <span class="ok">should be visible by default</span>
  <span class="ok">should have performances visible by default</span>
  <span class="ok">should not be published at start</span>
  <span class="fail">should not be ready to publish at start - without performances, etc</span>
  #allowed_performance_kinds
    <span class="ok">should allow all by default</span>
    
Failures:

  1) Campaign should not be ready to publish at start - without performances, etc
     <span class="fail">Failure/Error: campaign.should_not be_ready_to_publish</span>
     <span class="fail">  expected ready_to_publish? to return false, got true</span>
     # ./spec/models/campaign_spec.rb:23:in `block (2 levels) in <top (required)>'

Finished in 0.71323 seconds
<span class="fail">5 examples, 1 failure</span>
</pre>


!SLIDE full-page
### When tests output matter ###

![integrity](integrity.png)