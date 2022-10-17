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
exports.AdvisorsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const parse_object_id_pipe_pipe_1 = require("../utilities/parse-object-id-pipe.pipe");
const advisors_service_1 = require("./advisors.service");
const create_advisor_dto_1 = require("./dto/create-advisor.dto");
const update_advisor_dto_1 = require("./dto/update-advisor.dto");
let AdvisorsController = class AdvisorsController {
    constructor(advisorsService) {
        this.advisorsService = advisorsService;
    }
    create(createAdvisorDto) {
        return this.advisorsService.create(createAdvisorDto);
    }
    findAll(request) {
        return this.advisorsService.findAll(request);
    }
    findOne(id) {
        return this.advisorsService.findOne(id);
    }
    update(id, updateAdvisorDto) {
        return this.advisorsService.update(id, updateAdvisorDto);
    }
    remove(id) {
        return this.advisorsService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_advisor_dto_1.CreateAdvisorsDto]),
    __metadata("design:returntype", void 0)
], AdvisorsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdvisorsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', parse_object_id_pipe_pipe_1.ParseObjectIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdvisorsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', parse_object_id_pipe_pipe_1.ParseObjectIdPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_advisor_dto_1.UpdateAdvisorsDto]),
    __metadata("design:returntype", void 0)
], AdvisorsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', parse_object_id_pipe_pipe_1.ParseObjectIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdvisorsController.prototype, "remove", null);
AdvisorsController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('advisors'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('advisors'),
    __metadata("design:paramtypes", [advisors_service_1.AdvisorsService])
], AdvisorsController);
exports.AdvisorsController = AdvisorsController;
//# sourceMappingURL=advisors.controller.js.map