Given(/^im on the pairingMap page$/) do
  visit 'http://localhost:1337'
end
Then(/^i should see an empty grid of pairing stats$/) do
  find('table#pairingMapGrid').text.should == ""
end