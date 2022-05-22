import { Test, TestingModule } from '@nestjs/testing';
import { SampleResolver } from './sample.resolver';

describe('SampleResolver', () => {
  let resolver: SampleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SampleResolver],
    }).compile();

    resolver = module.get<SampleResolver>(SampleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
