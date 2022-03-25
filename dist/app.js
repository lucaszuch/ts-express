"use strict";
/*
 * Types added:
 * @type/node
 * @type/express
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// We are using TS import instead of the default require() from node, so it's compiled by tsc
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const app = (0, express_1.default)();
// Routes
const post_1 = __importDefault(require("./routes/post"));
// Middleware
app.use('/post', post_1.default);
app.use((0, body_parser_1.json)());
// Basic error handler using express
app.use((error, req, res, next) => {
    res.status(500).json({
        message: error.message
    });
});
// Listening to port
app.listen(3000);
