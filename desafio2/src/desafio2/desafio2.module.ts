import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Desafio2} from './desafio2.entity';
import {Desafio2Controller} from './desafio2.controller'
import {Desafio2Service} from './desafio2.service'

@Module({
    imports: [TypeOrmModule.forFeature([Desafio2])],
    controllers: [Desafio2Controller],
    providers: [Desafio2Service]
})
export class Desafio2Module {}
