import { Module } from '@nestjs/common';
import { Desafio2Module } from './desafio2/desafio2.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Desafio2 } from './desafio2/desafio2.entity';
import {ConfigService} from "@nestjs/config";
import { Desafio2Service } from './desafio2/desafio2.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'database.sqlite',
    entities: [Desafio2],
 }), Desafio2Module],
 providers: [
 ConfigService
]
})
export class AppModule {}
