"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teams = void 0;
var mongoose_1 = require("mongoose");
var teamsSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    teamName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    winningYears: Array,
    venue: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    versionKey: false
});
var Teams = (0, mongoose_1.model)("Teams", teamsSchema);
exports.Teams = Teams;
