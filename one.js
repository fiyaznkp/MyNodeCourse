const http = require("http")

const port =5173

const server = http.createServer((req,res)=>{
    res.end("hello")
})

server.listen(port)

