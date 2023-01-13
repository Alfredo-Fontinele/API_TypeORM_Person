"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const M = __importStar(require("../mocks/person/index"));
const bcryptjs_1 = require("bcryptjs");
const app_1 = require("../../app");
const supertest_1 = __importDefault(require("supertest"));
let newPerson;
describe('/persons', () => {
    let connection;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield data_source_1.AppDataSource.initialize().then((res) => {
            connection = res;
        }).catch((err) => {
            console.error("Error during Data Source initialization", err);
        });
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield connection.destroy();
    }));
    it('POST /persons - Should be able to create user', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.app).post('/persons').send(M.mockedUserValid);
        newPerson = response.body;
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('name');
        expect(response.body).toHaveProperty('email');
        expect(response.body).toHaveProperty('password');
        expect(response.body.name).toStrictEqual(M.mockedUserValid.name);
        expect(response.body.email).toStrictEqual(M.mockedUserValid.email);
        expect((0, bcryptjs_1.compare)(M.mockedUserValid.password, response.body.password)).toBeTruthy();
        expect(response.status).toBe(201);
    }));
    it('POST /persons - Should not be able to create invalid body user', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.app).post('/persons').send(M.mockedUserInvalid);
        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(400);
    }));
    it('GET /persons - Should be able to list all users', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.app).get('/persons');
        expect(response.status).toBe(200);
    }));
    it('GET /persons/:id - Should be able to list a user by id', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.app).get(`/persons/${newPerson.id}`);
        const foundUser = response.body[0];
        expect(foundUser).toHaveProperty("name");
        expect(foundUser.name).toStrictEqual(M.mockedUserValid.name);
        expect(response.status).toBe(200);
    }));
    it('GET /persons/:id - Should not be able to list a user with invalid id', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.app).get(`/persons/teste`);
        expect(response.status).toBe(404);
    }));
    it('PATCH /persons/:id - Should be able to update a user by id', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.app).patch(`/persons/${newPerson.id}`).send(M.mockedUserUpdateValid);
        const foundUser = response.body[0];
        expect(foundUser).toHaveProperty('id');
        expect(foundUser).toHaveProperty('name');
        expect(foundUser).toHaveProperty('email');
        expect(foundUser).not.toHaveProperty('password');
        expect(foundUser.name).toStrictEqual(M.mockedUserUpdateValid.name);
        expect(foundUser.email).toStrictEqual(M.mockedUserUpdateValid.email);
        expect(response.status).toBe(200);
    }));
    it('PATCH /persons/:id - Should not be able to delete user with id invalid', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.app).patch(`/persons/teste`).send({});
        expect(response.status).toBe(400);
    }));
    it('DELETE /persons/:id - Should be able to delete user by id', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.app).delete(`/persons/${newPerson.id}`);
        expect(response.status).toBe(204);
    }));
    it('DELETE /persons/:id - Should not be able to delete user with id invalid', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.app).delete(`/persons/teste`);
        expect(response.status).toBe(404);
    }));
});
//# sourceMappingURL=person.test.js.map