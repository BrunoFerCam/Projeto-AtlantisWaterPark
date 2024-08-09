import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressorCliente from "../../impressores/impressorCliente";
import ImpressorDependente from "../../impressores/impressorDependente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/valores/cliente";

export default class ListagemTodosDependentes extends Processo {
    private clientes: Cliente[];
    private impressor!: Impressor;

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear();
        console.log('Iniciando a listagem dos dependentes...');

        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].Dependentes && this.clientes[i].Dependentes.length > 0) {
                this.clientes[i].Dependentes.forEach(dependente => {
                    this.impressor = new ImpressorDependente(dependente);
                    console.log(this.impressor.imprimir());
                });
            } else {
                console.log(`${this.clientes[i].Nome} não possui dependentes.`);
            }
        }
    }
}