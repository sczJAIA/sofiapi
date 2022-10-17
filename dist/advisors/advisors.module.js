"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvisorsModule = void 0;
const common_1 = require("@nestjs/common");
const advisors_service_1 = require("./advisors.service");
const advisors_controller_1 = require("./advisors.controller");
const mongoose_1 = require("@nestjs/mongoose");
const advisor_schema_1 = require("./schemas/advisor.schema");
let AdvisorsModule = class AdvisorsModule {
};
AdvisorsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: advisor_schema_1.Advisors.name, schema: advisor_schema_1.AdvisorsSchema },
            ]),
        ],
        controllers: [advisors_controller_1.AdvisorsController],
        providers: [advisors_service_1.AdvisorsService],
    })
], AdvisorsModule);
exports.AdvisorsModule = AdvisorsModule;
//# sourceMappingURL=advisors.module.js.map