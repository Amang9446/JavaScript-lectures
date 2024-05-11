const express = require("express")
const { WebSocketServer } = require("ws")
const app = express()
const httpServer = app.listen(3000, () => {
    console.log("Server is connected");
})
const wss = new WebSocketServer({
    server: httpServer
})
const clients = [];
wss.on('connection', function (ws) {
    ws.on('error', (error) => { console.log(error) })
    const userId = clients.length;
    clients.push({ ws, userId })
    ws.on('message', function (message) {
        clients.forEach((client) => {
            if (client.userId != userId) client.ws.send(`Client${userId} says ${message}`)
        })
    })
    ws.send("You are connected to Socket Server....")
})
