import Documento from "./documento"
import Endereco from "./endereco"
import Telefone from "./telefone"

export default class Cliente {
    public Nome: string
    public NomeSocial: string
    public DataNascimento: Date
    public DataCadastro: Date
    public Telefones?: Telefone[] = []
    public Endereco?: Endereco
    public Documentos?: Documento[] = []
    public Dependentes?: Cliente[] = []
    public Titular?: Cliente | string
}