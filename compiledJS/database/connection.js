"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var connection = function (DB_URL) {
    mongoose_1.default
        .connect(DB_URL)
        .then(function () {
        console.log("connection is successful");
    })
        .catch(function (err) {
        console.log(err);
    });
};
exports.default = connection;
