"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
const typeorm_1 = require("typeorm");
const Person_1 = require("./Person");
let Job = class Job {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Job.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Job.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Job.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Person_1.Person, person => person.jobs, {
        onDelete: 'CASCADE', onUpdate: 'CASCADE'
    }),
    (0, typeorm_1.JoinTable)({
        name: 'person_job',
        joinColumn: {
            name: 'person_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'job_id',
            referencedColumnName: 'id'
        }
    }),
    __metadata("design:type", Array)
], Job.prototype, "persons", void 0);
Job = __decorate([
    (0, typeorm_1.Entity)('jobs')
], Job);
exports.Job = Job;
//# sourceMappingURL=Job.js.map