<!SLIDE bullets full-page>

## Back to unit test assumptions ##

* <span class="bullet">»</span> _"A unit is the smallest testable part of an application"_
* <span class="bullet">»</span> _"The goal of unit testing is to isolate each part of the program and show that the individual parts are correct"_
* <span class="bullet">»</span> _"Ideally, each test case is independent from the others"_


<!SLIDE bullets full-page>

## you.should use\_stubs!  ##

* <span class="bullet">»</span> Isolate your unit tests from external libraries and dependencies 
* <span class="bullet">»</span> Propagate skinny methods which has low responsibility
* <span class="bullet">»</span> Single bug should make only related tests fail
* <span class="bullet">»</span> Speed up tests 

<!SLIDE bullets full-page>

## PeopleJar is using :) ##

<pre class="console">
<span class="ok">
...............................................................................................................
...............................................................................................................
...............................................................................................................
...............................................................................................................
...............................................................................*...............................
...............................................................................................................
...............................................................................................................
..........................................................................*****................................
..................................</span>

Finished in 55.22 seconds
<span class="ok">1037 examples, 0 failures, 6 pending</span>
</pre>