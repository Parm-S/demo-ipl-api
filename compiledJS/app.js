"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var helmet_1 = __importDefault(require("helmet"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var connection_1 = __importDefault(require("./database/connection"));
var teams_route_1 = require("./routes/teams-route");
var team_route_1 = require("./routes/team-route");
var httplogger_1 = require("./logger/httplogger");
var notFound_route_1 = require("./routes/notFound-route");
var swaggerdocs = __importStar(require("./swagger.json"));
var app = (0, express_1.default)();
exports.app = app;
dotenv_1.default.config();
// Connect to the database
var MONGO_HOSTNAME = process.env.MONGO_HOSTNAME;
var MONGO_PORT = process.env.MONGO_PORT;
var MONGO_DB = process.env.MONGO_DB;
var DB_URL = "mongodb://" + MONGO_HOSTNAME + ":" + MONGO_PORT + "/" + MONGO_DB;
(0, connection_1.default)(DB_URL);
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
//generate http logs
app.use(httplogger_1.httpLogger);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerdocs));
//Routes
app.use("/teams", teams_route_1.teamsRoute);
app.use("/teams", team_route_1.teamRoute);
app.use("*", notFound_route_1.notFoundRoute);
