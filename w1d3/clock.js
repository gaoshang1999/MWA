'use strict';

const EventEmitter = require('events');

class Clock extends EventEmitter {
    constructor(){
      super();
    }

    tick(){
      setInterval(()=>this.emit('tick'), 1000);
    }

}


const c = new Clock();

c.on('tick', ()=>{console.log("woohoo");})

c.tick();

