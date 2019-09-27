import { Controller, Get } from '@nestjs/common';
import { UsuarioService } from '../usuario-service/usuario-service.service';
import { Usuario } from '../usuario.entity';

@Controller('usuarios')
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService){}

    @Get('/all')
    async findAll(): Promise<Usuario[]> {
        return this.usuarioService.findAll();
    }
}
