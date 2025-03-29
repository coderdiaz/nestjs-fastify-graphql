import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import config, { type Config } from './config';

import { AppController } from './app.controller';
import { SampleModule } from './sample/sample.module';

@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    GraphQLModule.forRootAsync<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        graphiql: Boolean(
          configService.get<Config['graphql']>('graphql').graphiql,
        ),
      }),
      inject: [ConfigService],
    }),
    SampleModule,
  ],
})
export class AppModule {}
