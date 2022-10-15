import { Module } from '@nestjs/common';
import { AdvisorsService } from './advisors.service';
import { AdvisorsController } from './advisors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Advisors, AdvisorsSchema } from './schemas/advisor.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Advisors.name, schema: AdvisorsSchema },
    ]),
  ],
  controllers: [AdvisorsController],
  providers: [AdvisorsService],
})
export class AdvisorsModule {}
