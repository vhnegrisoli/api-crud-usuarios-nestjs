import { Module } from '@nestjs/common';
import { UsuarioServiceService } from './usuario-service/usuario-service.service';
import { UsuarioControllerController } from './usuario-controller/usuario-controller.controller';

@Module({
  providers: [UsuarioServiceService],
  controllers: [UsuarioControllerController]
})
export class UsuarioModule {}
