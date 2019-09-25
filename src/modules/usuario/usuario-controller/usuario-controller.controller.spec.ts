import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioControllerController } from './usuario-controller.controller';

describe('UsuarioController Controller', () => {
  let controller: UsuarioControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioControllerController],
    }).compile();

    controller = module.get<UsuarioControllerController>(UsuarioControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
