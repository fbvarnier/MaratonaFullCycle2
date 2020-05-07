import { Module } from '@nestjs/common';
import { Desafio3Controller } from './desafio3/desafio3.controller';
import { Desafio3Module } from './desafio3/desafio3.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static/css'),
      exclude: ['/api*'],
    }),
    Desafio3Module
  ],
 providers: [
],
 controllers: [Desafio3Controller]
})
export class AppModule {}
