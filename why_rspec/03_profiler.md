<!SLIDE full-page>

## Built-in profiler ##

<pre class="console">
$ rspec --profile spec/

Top 10 slowest examples:
  PerformanceSortable should use creation date if there is no position (older first)
    <span class="fail">1.5 seconds</span> ./spec/lib/performance_sortable_spec.rb:20
  PerformanceSortable should use position to sort performances regardless of their type
    <span class="fail">1.14 seconds</span> ./spec/lib/performance_sortable_spec.rb:8
  PerformanceSortable should put performances without position at end on sort
    <span class="fail">0.91228 seconds</span> ./spec/lib/performance_sortable_spec.rb:14
  Globe#Items management only one globe can be active
    <span class="fail">0.51207 seconds</span> ./spec/models/globe_spec.rb:60
  Admin::UsersController#index should support xls format
    <span class="fail">0.42799 seconds</span> ./spec/controllers/admin/users_controller_spec.rb:14
  Globe#Items management should be able to edit existing globeitem collection
    <span class="fail">0.35712 seconds</span> ./spec/models/globe_spec.rb:74
  Globe#Items management should be able to set to active if there is 20 globeitems or more in globe collection
    <span class="fail">0.29752 seconds</span> ./spec/models/globe_spec.rb:53
  Json::GlobesController#show should render template without errors
    <span class="fail">0.2893 seconds</span> ./spec/controllers/json/globes_controller_spec.rb:29
  Vote average ratings should update user average for resource
    <span class="fail">0.28084 seconds</span> ./spec/models/vote_spec.rb:23
  Comment#destroy should delete child comments
    <span class="fail">0.27684 seconds</span> ./spec/models/comment_spec.rb:23

Finished in 58.98 seconds
<span class="ok">955 examples, 0 failures, 6 pending</span>
</pre>