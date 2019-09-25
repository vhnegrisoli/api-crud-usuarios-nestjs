import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario-service/usuario-service.service';
import { UsuarioController } from './usuario-controller/usuario-controller.controller';

@Module({
  providers: [UsuarioService],
  controllers: [UsuarioController]
})
export class UsuarioModule {}
