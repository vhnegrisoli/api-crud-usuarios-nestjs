import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Usuario } from '../usuario.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioRepository } from '../usuario-repository/usuario.repository';

@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: UsuarioRepository,
    ){}    

    async findAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find();
    }

    async findOne(id): Promise<Usuario> {
        if (!id) {
            throw new HttpException('Por favor, informe um usuário para buscar.', HttpStatus.BAD_REQUEST);
        }
        let usuario = await this.usuarioRepository.findOne(id);
        if (usuario) {
            return usuario;    
        } else {
            throw new HttpException('O usuário não foi encontrado.', HttpStatus.NOT_FOUND);
        }
    }
    
    async findByCpf(cpf): Promise<Usuario> {
        if (!cpf) {
            throw new HttpException('Por favor, informe um cpf para buscar.', HttpStatus.BAD_REQUEST);
        }
        let usuario = await this.usuarioRepository.findByCpf(cpf);
        if (usuario) {
            return usuario;    
        } else {
            throw new HttpException('O usuário não foi encontrado.', HttpStatus.NOT_FOUND);
        }
    }

    async findByEmail(email): Promise<Usuario> {
        if (!email) {
            throw new HttpException('Por favor, informe um email para buscar.', HttpStatus.BAD_REQUEST);
        }
        let usuario = await this.usuarioRepository.findByEmail(email);
        if (usuario) {
            return usuario;    
        } else {
            throw new HttpException('O usuário não foi encontrado.', HttpStatus.NOT_FOUND);
        }
    }

    async save(usuario): Promise<Usuario> {
        if (!usuario) {
            throw new HttpException('Por favor, informe um usuário.', HttpStatus.BAD_REQUEST);
        }
        this.validarCpf(usuario);
        this.validarEmail(usuario);
        if (this.novoUsuario(usuario)) {
            let permissao = { id: 2 }
            usuario.permissao = permissao;
        }
        return this.usuarioRepository.save(usuario);
    }

    novoUsuario(usuario) {
        return usuario.id == null;
    }

    validarCpf(usuario) {
        this.usuarioRepository.findByCpf(usuario.cpf)
        .then(res => {
            if (!usuario.id || res.id !== usuario.id) {
                throw new HttpException('Já existe um usuário com esse CPF.', HttpStatus.BAD_REQUEST);
            }
        });
    }

    validarEmail(usuario) {
        this.usuarioRepository.findByEmail(usuario.email)
        .then(res => {
            if (!usuario.id || res.id !== usuario.id) {
                throw new HttpException('Já existe um usuário com esse email.', HttpStatus.BAD_REQUEST);
            }
        });
    }

    delete(id) {
        this.findOne(id);
        return this.usuarioRepository.delete(id);
    }
}
