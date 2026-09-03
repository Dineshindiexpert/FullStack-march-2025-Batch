const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);

const io = new Server(server);

app.use(express.static(path.join(__dirname, "/")));


// =====================================================
// ROOMS
// =====================================================

const rooms = {};


// =====================================================
// WINNING COMBINATIONS
// =====================================================

const WIN_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];


// =====================================================
// CHECK WIN
// =====================================================

function getWinningCombination(board) {

    for (const combination of WIN_COMBINATIONS) {

        const [a, b, c] = combination;

        if (
            board[a] !== "" &&
            board[a] === board[b] &&
            board[a] === board[c]
        ) {
            return combination;
        }
    }

    return null;
}


// =====================================================
// FIND PLAYER
// =====================================================

function getPlayer(room, socketId) {

    return room.players.find(
        player => player.id === socketId
    );
}


// =====================================================
// SOCKET CONNECTION
// =====================================================

io.on("connection", (socket) => {

    console.log("Player connected:", socket.id);


    // =================================================
    // JOIN ROOM
    // =================================================

    socket.on("joinRoom", (data) => {

        const roomCode = String(data.room || "").trim();
        const playerName = String(data.name || "Player").trim();

        if (!roomCode) {
            return;
        }

        if (!playerName) {
            return;
        }


        // ---------------------------------------------
        // CREATE NEW ROOM
        // ---------------------------------------------

        if (!rooms[roomCode]) {

            rooms[roomCode] = {

                players: [
                    {
                        id: socket.id,
                        name: playerName.substring(0, 15),
                        sign: "X"
                    }
                ],

                board: Array(9).fill(""),

                turn: "X",

                score: {
                    X: 0,
                    O: 0
                },

                round: 1,

                gameOver: false,

                gameStarted: false,

                rematchRequests: []

            };

            socket.join(roomCode);


            socket.emit("roomStatus", {

                sign: "X",

                players: rooms[roomCode].players,

                score: rooms[roomCode].score

            });


            console.log(
                `${playerName} created room ${roomCode}`
            );

            return;
        }


        // ---------------------------------------------
        // ROOM ALREADY EXISTS
        // ---------------------------------------------

        const room = rooms[roomCode];


        // Room full
        if (room.players.length >= 2) {

            socket.emit("roomFull");

            return;
        }


        // ---------------------------------------------
        // ADD PLAYER O
        // ---------------------------------------------

        room.players.push({

            id: socket.id,

            name: playerName.substring(0, 15),

            sign: "O"

        });

        socket.join(roomCode);


        // Send room information to player
        socket.emit("roomStatus", {

            sign: "O",

            players: room.players,

            score: room.score

        });


        // ---------------------------------------------
        // START GAME
        // ---------------------------------------------

        room.gameStarted = true;

        room.gameOver = false;

        room.turn = "X";


        io.to(roomCode).emit("startGame", {

            turn: room.turn,

            players: room.players,

            score: room.score

        });


        console.log(
            `${playerName} joined room ${roomCode}`
        );

    });


    // =================================================
    // MAKE MOVE
    // =================================================

    socket.on("makeMove", (data) => {

        const roomCode = String(data.room || "");

        const room = rooms[roomCode];

        if (!room) {
            return;
        }


        // Find player
        const player =
            getPlayer(room, socket.id);

        if (!player) {
            return;
        }


        // Check player's sign
        if (player.sign !== data.sign) {
            return;
        }


        // Check turn
        if (room.turn !== data.sign) {
            return;
        }


        // Don't allow moves after game
        if (room.gameOver) {
            return;
        }


        // Get index
        const index = Number(data.index);


        // Validate index
        if (
            !Number.isInteger(index) ||
            index < 0 ||
            index > 8
        ) {
            return;
        }


        // Cell already occupied
        if (room.board[index] !== "") {
            return;
        }


        // ---------------------------------------------
        // MAKE MOVE
        // ---------------------------------------------

        room.board[index] = data.sign;


        // ---------------------------------------------
        // CHECK WIN
        // ---------------------------------------------

        const winningCombination =
            getWinningCombination(room.board);


        if (winningCombination) {

            room.gameOver = true;

            room.score[data.sign]++;


            // Send move
            io.to(roomCode).emit("moveMade", {

                index: index,

                sign: data.sign,

                nextTurn: null

            });


            // Send game over
            io.to(roomCode).emit("gameOver", {

                result: "win",

                winner: data.sign,

                winCombination:
                    winningCombination,

                score: room.score

            });


            return;
        }


        // ---------------------------------------------
        // CHECK DRAW
        // ---------------------------------------------

        if (!room.board.includes("")) {

            room.gameOver = true;


            io.to(roomCode).emit("moveMade", {

                index: index,

                sign: data.sign,

                nextTurn: null

            });


            io.to(roomCode).emit("gameOver", {

                result: "draw",

                score: room.score

            });


            return;
        }


        // ---------------------------------------------
        // CHANGE TURN
        // ---------------------------------------------

        room.turn =
            data.sign === "X"
                ? "O"
                : "X";


        // Send move to both players
        io.to(roomCode).emit("moveMade", {

            index: index,

            sign: data.sign,

            nextTurn: room.turn

        });

    });


    // =================================================
    // CHAT
    // =================================================

    socket.on("chatMessage", (data) => {

        const roomCode =
            String(data.room || "");

        const room = rooms[roomCode];

        if (!room) {
            return;
        }


        const player =
            getPlayer(room, socket.id);

        if (!player) {
            return;
        }


        let message =
            String(data.message || "").trim();


        // Maximum 200 characters
        message =
            message.substring(0, 200);


        if (!message) {
            return;
        }


        // Send message to room
        io.to(roomCode).emit(
            "chatMessage",
            {
                name: player.name,

                sign: player.sign,

                message: message
            }
        );

    });


    // =================================================
    // REACTIONS
    // =================================================

    socket.on("reaction", (data) => {

        const roomCode =
            String(data.room || "");

        const room = rooms[roomCode];

        if (!room) {
            return;
        }


        const allowedReactions = [
            "😂",
            "🔥",
            "😡",
            "💀",
            "GG"
        ];


        if (
            !allowedReactions.includes(
                data.reaction
            )
        ) {
            return;
        }


        io.to(roomCode).emit(
            "reaction",
            {
                reaction: data.reaction
            }
        );

    });


    // =================================================
    // REMATCH
    // =================================================

    socket.on("rematch", (data) => {

        const roomCode =
            String(data.room || "");

        const room = rooms[roomCode];

        if (!room) {
            return;
        }


        const player =
            getPlayer(room, socket.id);

        if (!player) {
            return;
        }


        // Add player to rematch requests
        if (
            !room.rematchRequests.includes(
                socket.id
            )
        ) {

            room.rematchRequests.push(
                socket.id
            );

        }


        // Tell player waiting
        socket.emit("rematchWaiting");


        // Both players accepted
        if (
            room.rematchRequests.length === 2
        ) {

            // Reset board
            room.board =
                Array(9).fill("");


            // Alternate starting player
            if (room.turn === "X") {

                room.turn = "O";

            } else {

                room.turn = "X";

            }


            room.round++;


            room.gameOver = false;


            room.rematchRequests = [];


            // Tell both players
            io.to(roomCode).emit(
                "rematchStart",
                {
                    turn: room.turn,

                    score: room.score,

                    players: room.players
                }
            );

        }

    });


    // =================================================
    // TIMEOUT
    // =================================================

    socket.on("timeout", (data) => {

        const roomCode =
            String(data.room || "");

        const room = rooms[roomCode];

        if (!room) {
            return;
        }


        const player =
            getPlayer(room, socket.id);

        if (!player) {
            return;
        }


        // Only current player can timeout
        if (
            room.turn !== player.sign
        ) {
            return;
        }


        // Game already finished
        if (room.gameOver) {
            return;
        }


        // Other player wins
        const winner =
            player.sign === "X"
                ? "O"
                : "X";


        room.gameOver = true;

        room.score[winner]++;


        io.to(roomCode).emit(
            "gameOver",
            {
                result: "timeout",

                winner: winner,

                score: room.score
            }
        );

    });


    // =================================================
    // LEAVE ROOM
    // =================================================

    socket.on("leaveRoom", (data) => {

        const roomCode =
            String(data.room || "");

        const room = rooms[roomCode];

        if (!room) {
            return;
        }


        const player =
            getPlayer(room, socket.id);

        if (!player) {
            return;
        }


        socket.leave(roomCode);


        io.to(roomCode).emit(
            "playerLeft"
        );


        delete rooms[roomCode];

    });


    // =================================================
    // DISCONNECT
    // =================================================

    socket.on("disconnect", () => {

        console.log(
            "Player disconnected:",
            socket.id
        );


        for (
            const roomCode in rooms
        ) {

            const room =
                rooms[roomCode];


            const player =
                getPlayer(
                    room,
                    socket.id
                );


            if (player) {

                io.to(roomCode).emit(
                    "playerLeft"
                );


                delete rooms[roomCode];

                break;
            }

        }

    });

});


// =====================================================
// SERVER START
// =====================================================

const PORT =
    process.env.PORT || 3000;


server.listen(
    PORT,
    () => {

        console.log(
            `🔥 Zero Cross running at http://localhost:${PORT}`
        );

    }
);
