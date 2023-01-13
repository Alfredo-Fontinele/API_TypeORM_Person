"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandlerError = void 0;
const appError_1 = require("./appError");
const HandlerError = (err, req, res, next) => {
    if (err instanceof appError_1.AppError) {
        return res.status(err.statusCode).json({ message: err.message });
    }
    return res.status(500).json({ message: "Internal Server Error" });
};
exports.HandlerError = HandlerError;
//# sourceMappingURL=handlerError.js.map