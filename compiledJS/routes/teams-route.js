"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamsRoute = void 0;
var express_1 = __importDefault(require("express"));
var teams_controller_1 = require("../controller/teams-controller");
var teamsRoute = express_1.default.Router();
exports.teamsRoute = teamsRoute;
// teamsRoute.post("/", addTeams);
teamsRoute.get("/", teams_controller_1.getTeams);
