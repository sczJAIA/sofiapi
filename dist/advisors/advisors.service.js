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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvisorsService = void 0;
const common_1 = require("@nestjs/common");
const advisor_schema_1 = require("./schemas/advisor.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let AdvisorsService = class AdvisorsService {
    constructor(advisorsModel) {
        this.advisorsModel = advisorsModel;
    }
    async findAll(request) {
        return this.advisorsModel
            .find(request.query)
            .setOptions({ sanitizeFilter: true })
            .exec();
    }
    async findOne(id) {
        const advisors = this.advisorsModel.findOne({ _id: id }).exec();
        if (!advisors) {
            throw new common_1.HttpException('USER_NOT_FOUND', common_1.HttpStatus.CONFLICT);
        }
        return advisors;
    }
    async update(id, updateAdvisorsDto) {
        await this.findOne(id);
        return this.advisorsModel.findOneAndUpdate({ _id: id }, updateAdvisorsDto, {
            new: true,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.advisorsModel.findByIdAndRemove({ _id: id }).exec();
    }
};
AdvisorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(advisor_schema_1.Advisors.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AdvisorsService);
exports.AdvisorsService = AdvisorsService;
//# sourceMappingURL=advisors.service.js.map