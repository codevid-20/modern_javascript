var moment = require('moment');
var math = require('mathjs');

var name = "James";
var date = "tomorrow";

console.log(`${name}, how are you ${date}`);


console.log(math.evaluate('13 + 12'));

console.log('helloooooooooooo from javascript');


console.log(moment().format('dddd'));

console.log(moment("19901030", "YYYYMMDD").fromNow());