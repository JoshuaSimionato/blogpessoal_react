import Postagem from "./Postagem";

export default interface Usuario {   // UsuarioLogin
    id: number;                   
    nome: string;
    usuario: string;
    foto: string;
    senha: string;
    postagem?: Postagem | null;
}  
