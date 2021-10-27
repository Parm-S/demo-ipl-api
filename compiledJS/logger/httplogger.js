"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpLogger = void 0;
var morgan_1 = __importDefault(require("morgan"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var accessLogStream = fs_1.default.createWriteStream(path_1.default.join(__dirname, "access.log"), { flags: "a" });
var httpLogger = (0, morgan_1.default)(":method :url :status :response-time ms - :res[content-length]", {
    stream: accessLogStream,
});
exports.httpLogger = httpLogger;
