import { PartialType } from '@nestjs/swagger';
import { CreateAdvisorsDto } from './create-advisor.dto';

export class UpdateAdvisorsDto extends PartialType(CreateAdvisorsDto) {}
