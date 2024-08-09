import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressorDependente from "../../impressores/impressorDependente";
import ImpressorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/valores/cliente";

export default class ListagemTodosTitular extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor

    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        console.clear();
        console.log('Iniciando a listagem dos titulares...');

        if (this.clientes.length > 0) {
            this.clientes.forEach(titular => {
                this.impressor = new ImpressorCliente(titular);
                console.log(this.impressor.imprimir());
            });
        }
    }
}