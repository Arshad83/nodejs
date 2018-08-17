var math=require('./math');
var util=require('util');

for (var i = 1; i<80; i++) {
util.log('Fibonacci for '+i+'='+math.fibonacciLoop(i));
}
