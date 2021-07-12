const express = require("express");

const app = express();

const http = require("http");

const server = http.createServer(app);

const { Server } = require("socket.io");

const IO = new Server(server);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

IO.on("connection", (socket) => {
    console.log("IO -> on -> connection: a user is connected", socket);
});

const PORT = 3001;

server.listen(PORT, () => {
    console.log(`chat -> listening on http://localhost:${PORT}`);
});
