import { Injectable } from '@nestjs/common';
import { CreateAdvisorsDto } from './dto/create-advisor.dto';
import { UpdateAdvisorsDto } from './dto/update-advisor.dto';
import { Advisors, AdvisorsDocument } from './schemas/advisor.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
import { hash } from 'bcrypt';

@Injectable()
export class AdvisorsService {
  constructor(
    @InjectModel(Advisors.name)
    private readonly advisorsModel: Model<AdvisorsDocument>,
  ) {}

  async create(createAdvisorDto: CreateAdvisorsDto): Promise<Advisors> {
    const { password } = createAdvisorDto;
    const plainToHash = await hash(password, 10);
    createAdvisorDto = { ...createAdvisorDto, password: plainToHash };
    return this.advisorsModel.create(createAdvisorDto);
  }

  async findAll(request: Request): Promise<Advisors[]> {
    return this.advisorsModel
      .find(request.query)
      .setOptions({ sanitizeFilter: true })
      .exec();
  }

  async findOne(id: string): Promise<Advisors> {
    return this.advisorsModel.findOne({ _id: id }).exec();
  }

  async update(
    id: string,
    updateAdvisorsDto: UpdateAdvisorsDto,
  ): Promise<Advisors> {
    return this.advisorsModel.findOneAndUpdate({ _id: id }, updateAdvisorsDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.advisorsModel.findByIdAndRemove({ _id: id }).exec();
  }
}
