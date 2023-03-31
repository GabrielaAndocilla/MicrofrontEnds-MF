import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { CharactersModule } from './modules/characters/characters.module';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    CharactersModule,
  ],
})
export class AppModule {}
