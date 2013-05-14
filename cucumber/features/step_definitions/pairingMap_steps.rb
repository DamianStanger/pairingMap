Given(/^im on the pairingMap page$/) do
  visit 'http://localhost:1337'
end
Then(/^i should see the pairs names:$/) do |table|
  pairs = all('table#pairingMapGrid thead tr td').map { |el| el.text }
  table = table.raw

  pairs[0].should == ""
  pairs[1].should == table[0][0]
  pairs[2].should == table[1][0]
end