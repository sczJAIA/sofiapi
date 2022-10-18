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
    MongooseModule.forRoot(
      // process.env.URIMONGO,
      'mongodb+srv://alejandrodev:2L8MrmvWP635U409@db-mongodb-nyc1-33154-559f29c0.mongo.ondigitalocean.com/?authMechanism=DEFAULT',
    ),
    AdvisorsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
