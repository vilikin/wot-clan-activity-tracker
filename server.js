/**
 * Created by vili on 06/12/2016.
 */
(function () {
    "use strict";

    var config = require("./config"),
        express = require("express"),
        cookieParser = require("cookie-parser"),
        app = express(),
        auth = require("./api/auth"),
        api = require("./api/api");

    app.use(cookieParser());

    app.use("/auth", auth);

    app.use("/api", api);

    app.listen(config.port, function () {
        console.log("HTTP Server is listening to port " + config.port);
    });
}());