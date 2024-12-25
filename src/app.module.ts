// imports from node
import { join } from 'path';

// imports from nest
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';

import { SeedModule } from './seed/seed.module';
import { CommonModule } from './common/common.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { EnvConfig } from './common/config/env.config';
import { JoiValidationSchema } from './common/config/joi.validation';

@Module({
  imports: [
    // for dotenv environment variable files
    ConfigModule.forRoot({
      load: [EnvConfig],
      validationSchema: JoiValidationSchema,
    }),

    // for webserver
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot(process.env.MONGODB),
    PokemonModule,
    CommonModule,
    SeedModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
