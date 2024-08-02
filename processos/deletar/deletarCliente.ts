import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/valores/cliente";

export default class DeletarCliente extends Processo {
    processar(): void {
        console.log('Iniciando a remoção de um cliente...')
        let nome = this.entrada.receberTexto('Qual o nome do cliente a ser removido? ')
        
        
        let armazem = Armazem.InstanciaUnica

        
        let clienteIndex = armazem.Clientes.findIndex(cliente => 
            cliente.Nome === nome 
        )
        
        
        if (clienteIndex !== -1) {
            armazem.Clientes.splice(clienteIndex, 1)
            console.log('Cliente removido com sucesso.')
        } else {
            console.log('Cliente não encontrado.')
        }
        
        console.log('Finalizando a remoção do cliente...')
    }
}
