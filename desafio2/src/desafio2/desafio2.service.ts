import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Desafio2 } from './desafio2.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class Desafio2Service {
    constructor(
        @InjectRepository(Desafio2)
        private readonly repository:Repository<Desafio2>
    ) {}

    async findAll(){
        return await this.repository.find();

    }

    async create(desafio2:Desafio2) {
        if (!desafio2.id){
            desafio2.id = uuid();
        }
        return await this.repository.save(desafio2);
    }
}
