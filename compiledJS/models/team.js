"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
var mongoose_1 = require("mongoose");
var playersSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
        trim: true,
    },
    stats: {
        matches: {
            type: Number,
            required: true,
            trim: true,
        },
        runs: {
            type: Number,
            required: true,
            trim: true,
        },
        wickets: {
            type: Number,
            required: true,
            trim: true,
        },
    },
}, {
    _id: false,
});
var teamSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    team: {
        captainId: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        wicketKeeperId: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
    },
    players: [playersSchema],
}, {
    versionKey: false,
});
var Team = (0, mongoose_1.model)("PTeam", teamSchema);
exports.Team = Team;
