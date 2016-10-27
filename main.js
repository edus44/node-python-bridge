'use strict';

var PyBridge = require('./PyBridge')

var pyBridge = new PyBridge('main.py')

pyBridge.on('message',function(message){
    console.log('message received:',message);
})

pyBridge.on('ready',function(){
    console.log('READY');
})

pyBridge.on('pong',function(payload){
    console.log('pong received',payload);
})

var c = 0;
setInterval(function(){
    console.log('ping sent');
    pyBridge.send('ping',++c)
},1000)