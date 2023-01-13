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
exports.PersonControllers = void 0;
const personServices_1 = require("../services/personServices");
exports.PersonControllers = {
    getAllPeople: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield personServices_1.PersonServices.getAllPeople(req);
        return res.status(200).json(data);
    }),
    createUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield personServices_1.PersonServices.createPerson(req);
        return res.status(201).json(data);
    }),
    getPersonById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield personServices_1.PersonServices.getPersonById(req);
        return res.status(200).json(data);
    }),
    updatePerson: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield personServices_1.PersonServices.updatePerson(req);
        return res.status(200).json(data);
    }),
    deletePerson: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield personServices_1.PersonServices.deletePerson(req);
        return res.status(204).json(data);
    }),
    createPersonJob: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield personServices_1.PersonServices.createPersonJob(req);
        return res.status(201).json(data);
    })
};
//# sourceMappingURL=personControllers.js.map