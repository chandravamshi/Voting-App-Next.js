import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

// node --env-file=.env --import=tsx --watch ./src/index.ts
const app = express();

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
