//event emitter
var EventEmitter = require("events").EventEmitter
var evt = new EventEmitter()

var eventHandler = function(){
  console.log("some_event emit~")
}

var handler = function(){
  evt.emit("some_event")
}

evt.on("some_event",eventHandler)

setTimeout(handler, 1000)
