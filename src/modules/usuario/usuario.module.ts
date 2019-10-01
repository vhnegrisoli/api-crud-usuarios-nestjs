import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario-service/usuario-service.service';
import { UsuarioController } from './usuario-controller/usuario-controller.controller';
import { UsuarioRepository } from './usuario-repository/usuario.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioRepository])],
  providers: [UsuarioService],
  controllers: [UsuarioController]
})
export class UsuarioModule {}
