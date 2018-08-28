var events = require("events")
var emitter = new events.EventEmitter()

var handler1 = function(arg1, arg2){
  console.log("listener1", arg1, arg2)
}

var handler2 = function(arg1, arg2){
  console.log("listener2", arg1, arg2)
}

emitter.on("some_event", handler1)
emitter.on("some_event", handler2)

emitter.emit("some_event", 4 ,3)

