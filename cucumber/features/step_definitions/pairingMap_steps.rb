Given(/^im on the pairingMap page$/) do
  visit 'http://localhost:1337'
end
Then(/^i should see the pairs names$/) do
  pairs = all('table#pairingMapGrid thead tr td').map { |el| el.text }

  pairs[0].should == ""
  pairs[1].should == "Damo"
  pairs[2].should == "Rob"
end