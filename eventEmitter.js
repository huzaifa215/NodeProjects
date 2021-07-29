const EventEmitter=require('events');

class MyEmitter extends EventEmitter{}

const myEmitter=new MyEmitter();

myEmitter.on('watterfull',(a,b)=>{
    console.log(`closed the tap`);
});

myEmitter.emit('watterfull');