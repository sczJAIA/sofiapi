import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { hash, compare } from 'bcrypt';
import {
  Advisors,
  AdvisorsDocument,
} from 'src/advisors/schemas/advisor.schema';
import { LoginDto } from './dto/log_in.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import { TokenDto } from './dto/token.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(Advisors.name)
    private readonly advisorsModel: Model<AdvisorsDocument>,
  ) {}
  async login(loginDto: LoginDto) {
    const { password, email } = loginDto;
    const findAdvisors = await this.advisorsModel.findOne({ email });
    if (!findAdvisors) {
      throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    }
    const checkPassword = await compare(password, findAdvisors.password);
    if (!checkPassword) {
      throw new HttpException('PASSWORD_INVALID', HttpStatus.CONFLICT);
    }
    const payload = { id: findAdvisors._id, name: findAdvisors.name };
    const token = this.jwtService.sign(payload);
    const advisors = this.sanitizeUser(findAdvisors);
    const data = {
      user: advisors,
      token,
    };
    return data;
  }

  async register_advisors(advisorsObject: RegisterDto): Promise<Advisors> {
    const { email, password } = advisorsObject;
    const advisorsExist = await this.advisorsModel.findOne({ email });
    if (advisorsExist) {
      throw new HttpException('EMAIL_ALREADY_REGISTERED', HttpStatus.CONFLICT);
    }
    const plainToHash = await hash(password, 10);
    advisorsObject = { ...advisorsObject, password: plainToHash };
    return this.advisorsModel.create(advisorsObject);
  }

  async refreshToken(dto: TokenDto): Promise<any> {
    const advisors = await this.jwtService.decode(dto.token);
    const payload = { id: advisors['_id'], name: advisors['name'] };
    const token = this.jwtService.sign(payload);
    return { token };
  }

  sanitizeUser(object) {
    const sanitized = object.toObject();
    delete sanitized['password'];
    return sanitized;
  }
}
