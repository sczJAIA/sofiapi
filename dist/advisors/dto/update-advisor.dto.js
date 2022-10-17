"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAdvisorsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_advisor_dto_1 = require("./create-advisor.dto");
class UpdateAdvisorsDto extends (0, swagger_1.PartialType)(create_advisor_dto_1.CreateAdvisorsDto) {
}
exports.UpdateAdvisorsDto = UpdateAdvisorsDto;
//# sourceMappingURL=update-advisor.dto.js.map