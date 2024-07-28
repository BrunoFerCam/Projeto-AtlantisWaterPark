import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/valores/cliente";
import ImpressorDocumentos from "./impressorDocumentos";
import ImpressorEndereco from "./impressorEnereco";
import ImpressorTelefone from "./impressorTelefone";


export default class ImpressorCliente implements Impressor {
    private cliente: Cliente
    private impressor!: Impressor

    constructor(cliente: Cliente) {
        this.cliente = cliente

    }
    imprimir(): string {
        let impressao = `****************************\n`
            + `| Nome: ${this.cliente.nome}\n`
            + `| Nome social: ${this.cliente.nomeSocial}\n`
            + `| Data de nascimento: ${this.cliente.dataNascimento.toLocaleDateString()}\n`
            + `| Data de cadastro: ${this.cliente.dataCadastro.toLocaleDateString()}\n`
            + `| Dependentes: ${this.cliente.dependentes.length}`

        this.impressor = new ImpressorEndereco(this.cliente.endereco)
        impressao = impressao + `\n${this.impressor.imprimir()}`

        this.impressor = new ImpressorTelefone(this.cliente.telefones)
        impressao = impressao + `\n${this.impressor.imprimir()}`

        this.impressor = new ImpressorDocumentos(this.cliente.documentos)
        impressao = impressao + `\n${this.impressor.imprimir()}`

        impressao = impressao + `\n****************************`
        return impressao
    }

}