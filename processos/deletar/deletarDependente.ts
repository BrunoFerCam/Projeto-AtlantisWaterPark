import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/valores/cliente";

export default class DeletarDependente extends Processo {
    processar(): void {
        console.log('Iniciando a remoção de um dependente...');
        

        let nomeTitular = this.entrada.receberTexto('Qual o nome do cliente titular? ');
        let nomeDependente = this.entrada.receberTexto('Qual o nome do dependente a ser removido? ');
        
        let armazem = Armazem.InstanciaUnica;
        let clienteTitular = armazem.Clientes.find(cliente => cliente.Nome === nomeTitular);

        if (clienteTitular) {
            let dependenteIndex = clienteTitular.Dependentes.findIndex(dependente => dependente.Nome === nomeDependente);
            
            if (dependenteIndex !== -1) {
                
                clienteTitular.Dependentes.splice(dependenteIndex, 1);
                console.log('Dependente removido com sucesso.');
            } else {
                console.log('Dependente não encontrado.');
            }
        } else {
            console.log('Cliente titular não encontrado.');
        }
        
        console.log('Finalizando a remoção do dependente...');
    }
}