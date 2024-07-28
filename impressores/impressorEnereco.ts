import Impressor from "../interfaces/impressor";
import Endereco from "../modelos/valores/endereco";

export default class ImpressorEndereco implements Impressor {
    private endereco: Endereco
    constructor(endereco: Endereco) {
        this.endereco = endereco
    }
    imprimir(): string {
        let impressao = `| Endereco:\n`
            + `| rua: ${this.endereco.rua}\n`
            + `| bairro: ${this.endereco.bairro}\n`
            + `| cidade: ${this.endereco.cidade}\n`
            + `| estado: ${this.endereco.estado}\n`
        return impressao
    }
}