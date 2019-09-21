import { Test, TestingModule } from '@nestjs/testing';
import { PermissaoServiceService } from './permissao-service.service';

describe('PermissaoServiceService', () => {
  let service: PermissaoServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PermissaoServiceService],
    }).compile();

    service = module.get<PermissaoServiceService>(PermissaoServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
