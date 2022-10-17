import { Model } from 'mongoose';
import { Advisors, AdvisorsDocument } from 'src/advisors/schemas/advisor.schema';
import { LoginDto } from './dto/log_in.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import { TokenDto } from './dto/token.dto';
export declare class AuthService {
    private jwtService;
    private readonly advisorsModel;
    constructor(jwtService: JwtService, advisorsModel: Model<AdvisorsDocument>);
    login(loginDto: LoginDto): Promise<{
        user: any;
        token: string;
    }>;
    register_advisors(advisorsObject: RegisterDto): Promise<Advisors>;
    refreshToken(dto: TokenDto): Promise<any>;
    sanitizeUser(object: any): any;
}
