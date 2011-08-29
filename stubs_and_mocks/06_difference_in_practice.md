<!SLIDE full-page>

## In practice - Stub failure ##

    @@@ Ruby
    describe ".to_csv_file" do
      it "should generate CSV output" do
        User.stub(:active).and_return([user])
        User.to_csv_file.should == "#{user.display_name},#{user.email}\n"
      end
    end

<pre class="console">
User
  .to_csv_file
    <span class="fail">should generate CSV output  (FAILED - 1)</span>

User.to_csv_file should generate CSV
     <span class="fail">
     Failure/Error: User.to_csv_file.should == "#{user.display_name},#{user.email}\n"
       expected: "tester,person29.134279480426606@example.com\n"
            got: "" (using ==)
       Diff:
       @@ -1,2 +1 @@
       -tester,person29.134279480426606@example.com</span>
     # ./spec/models/user_spec.rb:128:in `block (3 levels) in <top (required)>'

</pre>

<!SLIDE full-page>

## In practice - Mock failure ##

    @@@ Ruby
    describe "#facebook_uid=" do
      it "should build facebook setting instance if not exists when setting uid" do
        user.should_receive(:build_facebook_setting).with(:uid => "123")
        user.facebook_uid = "123"
      end
    end

<pre class="console">
User
  #facebook_uid=
    <span class="fail">should build facebook setting instance if not exists when setting uid (FAILED - 1)</span>
    
User#facebook_uid= should build facebook setting instance if not exists when setting uid
    <span class="fail">
      Failure/Error: user.should_receive(:build_facebook_setting).with(:uid => "123")
      (tester).build_facebook_setting({:uid=>"123"})
          expected: 1 time
          received: 0 times</span>
    # ./spec/models/user_spec.rb:194:in `block (3 levels) in <top (required)>'
</pre>