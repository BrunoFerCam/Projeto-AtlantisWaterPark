import Processo from "../../../abstracoes/processo";
import { TipoDocumento } from "../../../enumeracoes/tipoDocumento";
import Cliente from "../../../modelos/valores/cliente";
import Documento from "../../../modelos/valores/documento";

export default class CadastroPassaporte extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        let numero = this.entrada.receberTexto('Qual o número do documento?')
        let dataExpedicao = this.entrada.receberData('Qual a data de expedição do documento?')
        let passaporte = new Documento()
        this.cliente.documentos.push(passaporte)
    }
}