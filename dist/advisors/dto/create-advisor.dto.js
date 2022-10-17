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
exports.CreateAdvisorsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateAdvisorsDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'Jose Alejandro',
        type: String,
    }),
    __metadata("design:type", String)
], CreateAdvisorsDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'Ibañez Arevalo',
        type: String,
    }),
    __metadata("design:type", String)
], CreateAdvisorsDto.prototype, "last_name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1),
    (0, swagger_1.ApiProperty)({
        description: '1',
        example: '0: Femenino, 1: Masculino, 2: Prefiero no decirlo',
        type: String,
        maxLength: 1,
    }),
    __metadata("design:type", String)
], CreateAdvisorsDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'j.alejandro460@gmail.com',
        type: String,
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateAdvisorsDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: '+59165013519',
        type: String,
    }),
    __metadata("design:type", String)
], CreateAdvisorsDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'Bolivia',
        type: String,
    }),
    __metadata("design:type", String)
], CreateAdvisorsDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: '-17.72939205609252',
        type: String,
    }),
    __metadata("design:type", String)
], CreateAdvisorsDto.prototype, "lat", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: '-63.12186084889396',
        type: String,
    }),
    __metadata("design:type", String)
], CreateAdvisorsDto.prototype, "lng", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'clave123',
        type: String,
    }),
    __metadata("design:type", String)
], CreateAdvisorsDto.prototype, "password", void 0);
exports.CreateAdvisorsDto = CreateAdvisorsDto;
//# sourceMappingURL=create-advisor.dto.js.map