import { Module } from '@nestjs/common';
import { SampleResolver } from './sample.resolver';

@Module({
  providers: [SampleResolver]
})
export class SampleModule {}
