Given(/^im on the pairingMap page$/) do
  visit 'http://localhost:1337'
end

Then(/^i should see the pairs names horizontally:$/) do |table|
  pairs = all('table#pairingMapGrid thead tr td.pair_name').map { |el| el.text }
  table = table.raw

  pairs[0].should == table[0][0]
  pairs[1].should == table[1][0]
end

Then(/^i should see the pairs names vertically:$/) do |table|
  pairs = all('table#pairingMapGrid tbody tr td.pair_name').map { |el| el.text }
  table = table.raw

  pairs[0].should == table[0][0]
  pairs[1].should == table[1][0]
end

Then(/^i should see commits per pair:$/) do |table|
  pair_data = all('table#pairingMapGrid td.pair_data').map { |el| el.text }
  table = table.raw

  pair_data[0].should == table[0][0]
  pair_data[1].should == table[0][1]
  pair_data[2].should == table[1][0]
  pair_data[3].should == table[1][1]
end