"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamDetail = void 0;
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
var teamDetailsSchema = new mongoose_1.Schema({
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
var TeamDetail = (0, mongoose_1.model)("TeamDetail", teamDetailsSchema);
exports.TeamDetail = TeamDetail;
