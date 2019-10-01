import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Permissao } from "../permissao/permissao.entity";

@Entity({name: 'usuario'})
export class Usuario {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    email: string;

    @Column()
    nome: string;

    @Column()
    cpf: string;

    @Column()
    senha: string;

    @Column({name: 'data_cadastro'})
    dataCadastro: Date;

    @Column({name: 'ultimo_acesso'})
    ultimoAcesso: Date;

    @ManyToOne(type => Permissao, { eager: true })
    @JoinColumn({name: 'permissao_id'})
    permissao: Permissao;
}