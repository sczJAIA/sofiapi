import { AuthService } from './auth.service';
import { LoginDto } from './dto/log_in.dto';
import { RegisterDto } from './dto/register.dto';
import { TokenDto } from './dto/token.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        user: any;
        token: string;
    }>;
    register(registerDto: RegisterDto): Promise<import("../advisors/schemas/advisor.schema").Advisors>;
    refresh(dto: TokenDto): Promise<any>;
}
