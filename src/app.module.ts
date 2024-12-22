// imports from node
import { join } from 'path';

// imports from nest
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
