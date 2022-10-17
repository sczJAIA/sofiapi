import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdvisorsModule } from './advisors/advisors.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // ?retryWrites=true&w=majority
    MongooseModule.forRoot(
      'mongodb+srv://alejandro7op:LMUTZ4qVZ5U5Zm4H@cluster0.7wx8liv.mongodb.net/sofi',
    ),
    AdvisorsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
