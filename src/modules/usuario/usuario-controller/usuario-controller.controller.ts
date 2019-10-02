import { Controller, Get, Param, Post, Body, Delete, HttpStatus } from '@nestjs/common';
import { UsuarioService } from '../usuario-service/usuario-service.service';
import { Usuario } from '../usuario.entity';

@Controller('usuarios')
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService){}

    @Get()
    async findAll(): Promise<Usuario[]> {
        return this.usuarioService.findAll();
    }

    @Get('/:id')
    async findOne(@Param('id') id): Promise<Usuario> {
        return this.usuarioService.findOne(id);
    }

    @Get('/cpf/:cpf')
    async findByCpf(@Param('cpf') cpf): Promise<Usuario> {
        return this.usuarioService.findByCpf(cpf);
    }

    @Get('/email/:email')
    async findByEmail(@Param('email') email): Promise<Usuario> {
        return this.usuarioService.findByEmail(email);
    }

    @Post()
    async save(@Body() usuario: Usuario) {
        return this.usuarioService.save(usuario);
    }

    @Delete('/:id')
    async delete(@Param('id') id) {
        return this.usuarioService.delete(id);
    }
}
