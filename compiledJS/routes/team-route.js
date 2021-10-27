"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamRoute = void 0;
var express_1 = __importDefault(require("express"));
var teamdetails_controller_1 = require("../controller/teamdetails-controller");
var teamRoute = express_1.default.Router();
exports.teamRoute = teamRoute;
teamRoute.post("/:id", teamdetails_controller_1.addTeam);
teamRoute.get("/:id", teamdetails_controller_1.getTeam);
