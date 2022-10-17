/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { Request } from 'express';
import { AdvisorsService } from './advisors.service';
import { CreateAdvisorsDto } from './dto/create-advisor.dto';
import { UpdateAdvisorsDto } from './dto/update-advisor.dto';
export declare class AdvisorsController {
    private readonly advisorsService;
    constructor(advisorsService: AdvisorsService);
    create(createAdvisorDto: CreateAdvisorsDto): Promise<import("./schemas/advisor.schema").Advisors>;
    findAll(request: Request): Promise<import("./schemas/advisor.schema").Advisors[]>;
    findOne(id: string): Promise<import("./schemas/advisor.schema").Advisors>;
    update(id: string, updateAdvisorDto: UpdateAdvisorsDto): Promise<import("./schemas/advisor.schema").Advisors>;
    remove(id: string): Promise<import("mongoose").Document<unknown, any, import("./schemas/advisor.schema").AdvisorsDocument> & import("./schemas/advisor.schema").Advisors & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
