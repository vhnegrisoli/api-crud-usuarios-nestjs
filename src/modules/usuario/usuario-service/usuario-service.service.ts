import { Injectable } from '@nestjs/common';
import { Usuario } from '../usuario.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
    ){}    

    async findAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find();
    }

}
