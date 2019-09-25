import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioServiceService } from './usuario-service.service';

describe('UsuarioServiceService', () => {
  let service: UsuarioServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuarioServiceService],
    }).compile();

    service = module.get<UsuarioServiceService>(UsuarioServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
