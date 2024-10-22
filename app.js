const express = require('express')
const server = express()
server.use(express.json())
const port = 3000

server.get('/', (req,res) => {
	console.log("GET / Response")
	res.send("Hello, World");
})

server.post('/simple', (req,res) => {
	console.log("POST /simple Resposne")
	res.send("Simple Post");
})

server.post('/complex', (req,res) => {
	console.log("POST /complex Response");
	if(req.body && req.body.name == "John") {
		res.send("Complex Post");
	}
	else {
		res.status(400).send("Bad Request");
	}
})

server.patch('/:id', (req,res) => {
	console.log("PATCH /:id Response");
	res.send(req.params.id);
	
})

server.delete('/:id', (req,res) => {
	console.log("DELETE /:id Response");
	res.send(req.params.id);
	
})

server.listen(port, () => {
	console.log("Testing Server Started")
})
