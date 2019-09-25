import { Controller, Get } from '@nestjs/common';
import { UsuarioService } from '../usuario-service/usuario-service.service';
import { Usuario } from '../usuario.entity';

@Controller('usuario-controller')
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService){}

    @Get()
    async findAll(): Promise<Usuario[]> {
        return this.usuarioService.findAll();
    }
}
