import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: 'permissao'})
export class Permissao {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descricao: string;
    
    @Column()
    permissao: string;
}