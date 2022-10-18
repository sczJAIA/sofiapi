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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt_1 = require("bcrypt");
const advisor_schema_1 = require("../advisors/schemas/advisor.schema");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(jwtService, advisorsModel) {
        this.jwtService = jwtService;
        this.advisorsModel = advisorsModel;
    }
    async login(loginDto) {
        const { password, email } = loginDto;
        const findAdvisors = await this.advisorsModel.findOne({ email });
        if (!findAdvisors) {
            throw new common_1.HttpException('USER_NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
        }
        const checkPassword = await (0, bcrypt_1.compare)(password, findAdvisors.password);
        if (!checkPassword) {
            throw new common_1.HttpException('PASSWORD_INVALID', common_1.HttpStatus.CONFLICT);
        }
        const payload = { id: findAdvisors._id, name: findAdvisors.name };
        const token = this.jwtService.sign(payload);
        const advisors = this.sanitizeUser(findAdvisors);
        const data = {
            user: advisors,
            token,
        };
        return data;
    }
    async register_advisors(advisorsObject) {
        const { email, password } = advisorsObject;
        const advisorsExist = await this.advisorsModel.findOne({ email });
        if (advisorsExist) {
            throw new common_1.HttpException('EMAIL_ALREADY_REGISTERED', common_1.HttpStatus.CONFLICT);
        }
        const plainToHash = await (0, bcrypt_1.hash)(password, 10);
        advisorsObject = Object.assign(Object.assign({}, advisorsObject), { password: plainToHash });
        return this.advisorsModel.create(advisorsObject);
    }
    async refreshToken(dto) {
        const advisors = await this.jwtService.decode(dto.token);
        const payload = { id: advisors['_id'], name: advisors['name'] };
        const token = this.jwtService.sign(payload);
        return { token };
    }
    sanitizeUser(object) {
        const sanitized = object.toObject();
        delete sanitized['password'];
        return sanitized;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(advisor_schema_1.Advisors.name)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        mongoose_2.Model])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map