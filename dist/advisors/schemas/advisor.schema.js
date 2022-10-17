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
exports.AdvisorsSchema = exports.Advisors = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Advisors = class Advisors {
};
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Advisors.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Advisors.prototype, "last_name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        maxlength: 1,
    }),
    __metadata("design:type", String)
], Advisors.prototype, "gender", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        unique: true,
    }),
    __metadata("design:type", String)
], Advisors.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Advisors.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Advisors.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Advisors.prototype, "lat", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Advisors.prototype, "lng", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Advisors.prototype, "password", void 0);
Advisors = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Advisors);
exports.Advisors = Advisors;
exports.AdvisorsSchema = mongoose_1.SchemaFactory.createForClass(Advisors);
//# sourceMappingURL=advisor.schema.js.map