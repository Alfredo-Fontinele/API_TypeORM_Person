"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const handlerError_1 = require("./errors/handlerError");
const routes_1 = require("./routes");
const express_1 = __importDefault(require("express"));
require("express-async-errors");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use(routes_1.Routes);
exports.app.use(handlerError_1.HandlerError);
//# sourceMappingURL=app.js.map