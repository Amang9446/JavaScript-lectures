// const express = require("express")
// const { WebSocketServer } = require("ws")
// const app = express()
// const httpServer = app.listen(3000, () => {
//     console.log("Server is connected");
// })
// const wss = new WebSocketServer({
//     server: httpServer
// })
// const clients = [];
// wss.on('connection', function (ws) {
//     ws.on('error', (error) => { console.log(error) })
//     const userId = clients.length;
//     clients.push({ ws, userId })
//     ws.on('message', function (message) {
//         clients.forEach((client) => {
//             if (client.userId != userId) client.ws.send(`Client${userId} says ${message}`)
//         })
//     })
//     ws.send("You are connected to Socket Server....")
// })



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
const room = {};

// Set a password for the room
const roomPassword = "12345678";

wss.on('connection', function (ws) {
    ws.on('error', (error) => { console.log(error) })

    // Prompt the client for the password
    ws.send("Please enter the room password:");

    ws.once('message', function (message) {
        const enteredPassword = message.toString();

        if (enteredPassword === roomPassword) {
            const userId = clients.length;
            clients.push({ ws, userId })
            room[userId] = ws;

            ws.on('message', function (message) {
                for (const clientId in room) {
                    if (clientId != userId) {
                        room[clientId].send(`Client${userId} says ${message}`);
                    }
                }
            })

            ws.send("You Entered the room ");
        } else {
            ws.send("Incorrect password. Connection closed.");
            ws.close();
        }
    })
})