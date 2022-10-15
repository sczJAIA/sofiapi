import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Advisors, AdvisorsSchema } from 'src/advisors/schemas/advisor.schema';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Advisors.name,
        schema: AdvisorsSchema,
      },
    ]),
    JwtModule.register({
      secret: 'JWT_SECRET',
      signOptions: {
        expiresIn: '20s',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
