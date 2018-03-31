export const sampleData = [
  { token: "000000", sec: "BTC-6APR17-5000-C", underlying: "BTC", strike: "5000", start: "31 Mar 18", cp: "C", period: "6 Apr 18", price: "0.2900", creator: "James", owner: "" },
  { token: "000001", sec: "BTC-6APR17-5000-C", underlying: "BTC", strike: "5500", start: "31 Mar 18", cp: "C", period: "6 Apr 18", price: "0.2200", creator: "Kate", owner: "" },
  { token: "000002", sec: "BTC-6APR17-5000-C", underlying: "BTC", strike: "6000", start: "31 Mar 18", cp: "C", period: "6 Apr 18", price: "0.1500", creator: "Jones", owner: "" },
  { token: "000003", sec: "BTC-6APR17-5000-C", underlying: "BTC", strike: "6500", start: "31 Mar 18", cp: "C", period: "6 Apr 18", price: "0.0900", creator: "Bill", owner: "" },
  { token: "000004", sec: "BTC-6APR17-5000-C", underlying: "BTC", strike: "7000", start: "31 Mar 18", cp: "C", period: "6 Apr 18", price: "0.0400", creator: "Mike", owner: "" },
  { token: "000005", sec: "BTC-6APR17-5000-P", underlying: "BTC", strike: "5000", start: "31 Mar 18", cp: "P", period: "6 Apr 18", price: "0.0009", creator: "James", owner: "" },
  { token: "000006", sec: "BTC-6APR17-5500-P", underlying: "BTC", strike: "5500", start: "31 Mar 18", cp: "P", period: "6 Apr 18", price: "0.0050", creator: "Kate", owner: "" },
  { token: "000007", sec: "BTC-6APR17-6000-P", underlying: "BTC", strike: "6000", start: "31 Mar 18", cp: "P", period: "6 Apr 18", price: "0.0100", creator: "Jones", owner: "" },
  { token: "000008", sec: "BTC-6APR17-6500-P", underlying: "BTC", strike: "6500", start: "31 Mar 18", cp: "P", period: "6 Apr 18", price: "0.0400", creator: "Bill", owner: "" },
  { token: "000009", sec: "BTC-6APR17-7000-P", underlying: "BTC", strike: "7000", start: "31 Mar 18", cp: "P", period: "6 Apr 18", price: "0.0738", creator: "Mike", owner: "" },
];
var transaction_fee = -1000;
function get_strike(record){

  return record["strike"];
}
function get_option_type(record){

  return record["cp"];
}
function build_data_set(strike, cp){

  strike = parseInt(strike);
  var option = [], underlying = [];
  var end = 2*strike;
  // Options
  if(cp.toUpperCase() == "C"){
    option.push([0, trans_fee]);
    option.push([strike, trans_fee]);
    option.push([end, end-trans_fee]);
  } else {
    option.push([0, trans_fee-strike]);
    option.push([strike, trans_fee]);
    option.push([2*strike, trans_fee]);
  }
  // Underlying
  var spot = 0.7 * strike;
  underlying.push([0, -1*spot]);
  underlying.push([end, end-spot]);
  return [underlying, option];
}
