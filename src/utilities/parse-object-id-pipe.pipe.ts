import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import moongose from 'mongoose';

@Injectable()
export class ParseObjectIdPipe
  implements PipeTransform<any, moongose.Types.ObjectId>
{
  transform(value: any): moongose.Types.ObjectId {
    const validObjectId: boolean = moongose.isObjectIdOrHexString(value);
    if (!validObjectId) {
      throw new BadRequestException('Invalid ObjectId');
    }
    return value;
  }
}
