'use strict';

var PyBridge = require('./PyBridge')

var pyBridge = new PyBridge('main.py')

pyBridge.on('message',function(message){
    console.log('MESSAGE',message);
})

pyBridge.on('ready',function(){
    console.log('READY');
})

var c = 0;
setInterval(()=>{
    pyBridge.send('ping',++c)
},1000)