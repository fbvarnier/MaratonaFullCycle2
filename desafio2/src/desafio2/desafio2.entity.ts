import {Entity, PrimaryColumn, Column} from 'typeorm';
import { v4 as uuid } from 'uuid';


@Entity({name: 'aulas'})
export class Desafio2 {

    @PrimaryColumn({type: 'uuid'})
    public id:string = uuid();

    @Column('varchar')
    public nome_aula: string;


}
