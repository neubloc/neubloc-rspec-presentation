<!SLIDE full-page>

## View specs ##

### Placed under spec/views directory ###



    @@@ Ruby
    # view at views/campaigns/index.html.erb
    
    <%= content_for :actions do %>
    <div id="hb_actions" class="browse_arena">
      <div id="middle_actions">
        <ul class="btn">
        <li class="btn_blue"><%= create_performance_link %></li>
      </ul>
    </div>
    </div>
    <% end %>
    <div id="interest_board_holder"><%= campaings_wall_template(@campaigns) %></div>
    
    # spec at spec/views/campaigns/index.html.erb_spec.rb
    
    describe "campaigns/index.html.erb" do
      let(:campaign) { Factory.stub(:campaign) }
      
      it "displays pagination when there are more than 20 published campaigns" do
        assign(:campaigns, (1..21).map { campaign }.paginate(:per_page => 2) )
    
        render
        rendered.should include("Prev")
        rendered.should include("Next")
      end
    end