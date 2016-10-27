/* ĵshint node:true */
'use strict'

var PythonShell = require('python-shell')
var EventEmitter = require('events').EventEmitter

class PyBridge extends EventEmitter{
    constructor(file){
        super()
        this.pyshell = new PythonShell(file,{mode:'json',args:['-u']})

        this.pyshell.on('message', (message)=> {
            this.emit('message',message)
            this.emit(message.name,message.payload)
        })
    }

    end(){
        this.pyshell.end(err=>{
            if (err)
                throw err;
        })
    }

    send(name,payload){
        this.pyshell.send({
            name:name || 'message',
            payload:payload || null
        })
    }
}


module.exports = PyBridge