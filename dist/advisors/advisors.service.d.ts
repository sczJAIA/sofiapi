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
/// <reference types="mongoose/types/inferschematype" />
import { UpdateAdvisorsDto } from './dto/update-advisor.dto';
import { Advisors, AdvisorsDocument } from './schemas/advisor.schema';
import { Model } from 'mongoose';
import { Request } from 'express';
export declare class AdvisorsService {
    private readonly advisorsModel;
    constructor(advisorsModel: Model<AdvisorsDocument>);
    findAll(request: Request): Promise<Advisors[]>;
    findOne(id: string): Promise<Advisors>;
    update(id: string, updateAdvisorsDto: UpdateAdvisorsDto): Promise<Advisors>;
    remove(id: string): Promise<import("mongoose").Document<unknown, any, AdvisorsDocument> & Advisors & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
