import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ParseObjectIdPipe } from 'src/utilities/parse-object-id-pipe.pipe';
import { AdvisorsService } from './advisors.service';
// import { CreateAdvisorsDto } from './dto/create-advisor.dto';
import { UpdateAdvisorsDto } from './dto/update-advisor.dto';

@ApiBearerAuth()
@ApiTags('advisors')
@UseGuards(JwtAuthGuard)
@Controller('advisors')
export class AdvisorsController {
  constructor(private readonly advisorsService: AdvisorsService) {}

  // @Post()
  // create(@Body() createAdvisorDto: CreateAdvisorsDto) {
  //   return this.advisorsService.create(createAdvisorDto);
  // }

  @Get()
  findAll(@Req() request: Request) {
    return this.advisorsService.findAll(request);
  }

  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.advisorsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() updateAdvisorDto: UpdateAdvisorsDto,
  ) {
    return this.advisorsService.update(id, updateAdvisorDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.advisorsService.remove(id);
  }
}
