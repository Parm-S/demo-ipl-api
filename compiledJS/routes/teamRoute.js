"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamRoute = void 0;
var express_1 = __importDefault(require("express"));
var teamController_1 = require("../controller/teamController");
var teamRoute = express_1.default.Router();
exports.teamRoute = teamRoute;
teamRoute.post("/:id", teamController_1.setTeam);
