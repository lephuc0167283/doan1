import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NhansuModule } from './nhansu/nhansu.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot({
    envFilePath:'evn',
    isGlobal:true,
  }),
  MongooseModule.forRoot('mongodb://127.0.0.1:27017/doan1'),
    NhansuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
