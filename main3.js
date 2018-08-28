//events
var events = require("events")
var eventEmitter = new events.EventEmitter()

//solve
var connectHandler = function connected(){
  console.log("connect succeed ~")
  eventEmitter.emit("data_received")
}

var disconnectHandler = function disconnected(){
  console.log("disconnect ~")
}

var dataHandler = function(){
  console.log("data received ~")
  eventEmitter.emit("disconnection")	
}	


//bundle
eventEmitter.on("connection",connectHandler)
eventEmitter.on("data_received",dataHandler)
eventEmitter.on("disconnection",disconnectHandler)

//emit
eventEmitter.emit("connection")
console.log("finished~")
