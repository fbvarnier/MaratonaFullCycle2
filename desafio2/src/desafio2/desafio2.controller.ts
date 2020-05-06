import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { Desafio2Service } from './desafio2.service';
import { Desafio2 } from './desafio2.entity';

@Controller('maratona')
export class Desafio2Controller {
    constructor(
        private desafio2Service:Desafio2Service
    ) {}

    @Get()
    async getMenus() {
        return await this.desafio2Service.findAll();
    }

    @Post()
    async create(@Body() desafio2:Desafio2){
        return await this.desafio2Service.create(desafio2);
    }
}
