//routing 

const url = require("url")
const http = require("http")

const port =5173

const server= http.createServer((req,res)=>{

    const path = req.url

    if(path === "/" || path === "home"){
        res.end("home page")
    }
    else if(path === "/login"){
        res.end("login page")
    }
  else{
    res.end("error")
  }
})

server.listen(port)
