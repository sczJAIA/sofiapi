import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateAdvisorsDto } from './dto/update-advisor.dto';
import { Advisors, AdvisorsDocument } from './schemas/advisor.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
// import { CreateAdvisorsDto } from './dto/create-advisor.dto';
// import { hash } from 'bcrypt';

@Injectable()
export class AdvisorsService {
  constructor(
    @InjectModel(Advisors.name)
    private readonly advisorsModel: Model<AdvisorsDocument>,
  ) {}

  // async create(createAdvisorDto: CreateAdvisorsDto): Promise<Advisors> {
  //   const { password } = createAdvisorDto;
  //   const plainToHash = await hash(password, 10);
  //   createAdvisorDto = { ...createAdvisorDto, password: plainToHash };
  //   return this.advisorsModel.create(createAdvisorDto);
  // }

  async findAll(request: Request): Promise<Advisors[]> {
    return this.advisorsModel
      .find(request.query)
      .setOptions({ sanitizeFilter: true })
      .exec();
  }

  async findOne(id: string): Promise<Advisors> {
    const advisors = this.advisorsModel.findOne({ _id: id }).exec();
    if (!advisors) {
      throw new HttpException('USER_NOT_FOUND', HttpStatus.CONFLICT);
    }
    return advisors;
  }

  async update(
    id: string,
    updateAdvisorsDto: UpdateAdvisorsDto,
  ): Promise<Advisors> {
    await this.findOne(id);
    return this.advisorsModel.findOneAndUpdate({ _id: id }, updateAdvisorsDto, {
      new: true,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.advisorsModel.findByIdAndRemove({ _id: id }).exec();
  }
}
