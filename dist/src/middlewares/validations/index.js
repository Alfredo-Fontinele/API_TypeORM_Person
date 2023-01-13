"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = void 0;
const validateSchema = (serializer) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = yield req.body;
        yield serializer.validate(body, {
            abortEarly: false,
            stripUnknown: true
        });
        return next();
    }
    catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
});
exports.validateSchema = validateSchema;
//# sourceMappingURL=index.js.map