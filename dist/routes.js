"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteManager = void 0;
var HeaderService_1 = require("./HeaderService");
var RouteManager = /** @class */ (function () {
    function RouteManager(app, database) {
        this.app = app;
        this.defineRoutes();
        this.headerService = new HeaderService_1.HeaderService(database);
    }
    RouteManager.prototype.defineRoutes = function () {
        var _this = this;
        this.app.get('/hello', function (req, res) {
            res.json({ msg: "Welcome to the API" });
        });
        this.app.get('/pack/:id', function (req, res) { return _this.headerService.getLanguagePackByLanguageId(res, req.params.id); });
    };
    return RouteManager;
}());
exports.RouteManager = RouteManager;
//# sourceMappingURL=routes.js.map