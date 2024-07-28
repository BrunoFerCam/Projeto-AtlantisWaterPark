import Impressor from "../interfaces/impressor";
import Documento from "../modelos/valores/documento";

export default class ImpressorDocumento implements Impressor {
    private documento: Documento

    constructor(documento: Documento) {
        this.documento = documento
    }

    imprimir(): string {
        let impressao = `| Documento:\n`
            + `| Tipo: ${this.documento.tipo}\n`
            + `| Data expedição: ${this.documento.dataExpedicao.toLocaleDateString()}\n`
            + `| Número: ${this.documento.numero} \n|`
        return impressao
    }

}