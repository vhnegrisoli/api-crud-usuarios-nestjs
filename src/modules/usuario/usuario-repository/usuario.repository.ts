import {EntityRepository, Repository} from "typeorm";
import {Usuario} from "../usuario.entity";

@EntityRepository(Usuario)
export class UsuarioRepository extends Repository<Usuario> {

    findByCpf(cpf: string) {
        return this.findOne({ cpf });
    }

    findByEmail(email: string) {
        return this.findOne({ email });
    }
}