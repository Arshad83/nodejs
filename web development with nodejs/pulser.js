var events=require('events');
var util=require('util');

function Pulser(){
	events.EventEmitter.call(this);
	//console.log(this);
}

util.inherits(Pulser,events.EventEmitter);

Pulser.prototype.start=function(){
	setInterval(()=>{
		util.log('>>>> pulse');
		this.emit('pulse');
		util.log('<<<< pulse');
	},1000);
};

var pulser=new Pulser();

// Handler function

pulser.on('pulse',()=>{
	util.log('pulse received');
});
// start is pulsing
pulser.start();