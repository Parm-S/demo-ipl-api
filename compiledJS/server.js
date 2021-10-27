"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var port = process.env.PORT || 5000;
//server listening on the port 
app_1.app.listen(port, function () {
    console.log("server is running on " + port);
});
