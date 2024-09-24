const express = require('express')
const server = express()
const port = 3000

server.get('/', (req,res) => {
	console.log("GET / Response")
	res.send("Hello, World");
})

server.post('/simple', (req,res) => {
	console.log("POST /simple Resposne")
	res.send("Simple Post");
})		

server.listen(port, () => {
	console.log("Testing Server Started")
})
