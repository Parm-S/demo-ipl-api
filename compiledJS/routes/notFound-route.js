"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundRoute = void 0;
var notFoundRoute = function (req, res) {
    res.status(404).send("content not found");
};
exports.notFoundRoute = notFoundRoute;
