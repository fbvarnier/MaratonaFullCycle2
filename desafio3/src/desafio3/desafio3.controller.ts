import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
var fs = require('fs')

@Controller('')
export class Desafio3Controller {
    private senderHtml:string; 
    private receiverHtml:string;
    constructor(){
        this.senderHtml = fs.readFileSync('./static/send.html');
        this.receiverHtml = fs.readFileSync('./static/receive.html');
    }


    @Get('/sender')
    sender(@Res() response: Response) {
        response.type('text/html').status(200).send(this.senderHtml).end();
    }

    @Get('/receiver')
    receiver (@Res() response: Response) {
        response.type('text/html').status(200).send(this.receiverHtml).end();
    }

}
