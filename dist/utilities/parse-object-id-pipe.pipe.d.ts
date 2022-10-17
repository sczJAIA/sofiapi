import { PipeTransform } from '@nestjs/common';
import moongose from 'mongoose';
export declare class ParseObjectIdPipe implements PipeTransform<any, moongose.Types.ObjectId> {
    transform(value: any): moongose.Types.ObjectId;
}
