// event emittor

const events = require("events")

const event = new events()

event.on("myName",()=>{
    console.log("my name is fiyaz")
})

event.emit("myName")