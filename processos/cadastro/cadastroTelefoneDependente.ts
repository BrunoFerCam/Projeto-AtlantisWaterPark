import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/valores/cliente";
import Endereco from "../../modelos/valores/endereco";
import Armazem from "../../dominio/armazem";

export default class CadastroEnderecoDependente extends Processo {
    private cliente: Cliente
    private nomeTitular: string

    constructor(cliente: Cliente, nomeTitular: string) {
        super()
        this.cliente = cliente
        this.nomeTitular = nomeTitular
    }

    processar(): void {
        console.log(`----------------------\nDeseja informar o endereço do dependente? \n1 - Sim \n2 - Não \n----------------------`)
        let opcEndereçoDependente = this.entrada.receberNumero(`Qual opcão desejada?`)
        if (opcEndereçoDependente === 1) {
            console.log('Coletando os dados de endereço...')
            let rua = this.entrada.receberTexto('Qual a rua?')
            let bairro = this.entrada.receberTexto('Qual o bairro?')
            let cidade = this.entrada.receberTexto('Qual a cidade?')
            let estado = this.entrada.receberTexto('Qual o estado?')
            let pais = this.entrada.receberTexto('Qual o país?')
            let codigoPostal = this.entrada.receberTexto('Qual o código postal?')
            let endereco = new Endereco(rua,bairro,cidade,estado,pais,codigoPostal)
            this.cliente.Endereco = endereco
        } if (opcEndereçoDependente === 2) {
            let clienteTitular = Armazem.InstanciaUnica.Clientes.find(cliente => cliente.Nome === this.nomeTitular)
            
            console.log( `Endereços de ${this.nomeTitular}:` )
            let enderecoTitular = clienteTitular?.Endereco
            
            let endereco = new Endereco(
                enderecoTitular?.Rua ?? "",
                enderecoTitular?.Bairro ?? "",
                enderecoTitular?.Cidade ?? "",
                enderecoTitular?.Estado ?? "",
                enderecoTitular?.Pais ?? "",
                enderecoTitular?.CodigoPostal ?? ""
            );

            this.cliente.Endereco = endereco

        } else {
            console.log(`Opção inválida!`)
            let clienteTitular = Armazem.InstanciaUnica.Clientes.find(cliente => cliente.Nome === this.nomeTitular)
            
            console.log( `Endereços de ${this.nomeTitular}:` )
            let enderecoTitular = clienteTitular?.Endereco
            
            let endereco = new Endereco(
                enderecoTitular?.Rua ?? "",
                enderecoTitular?.Bairro ?? "",
                enderecoTitular?.Cidade ?? "",
                enderecoTitular?.Estado ?? "",
                enderecoTitular?.Pais ?? "",
                enderecoTitular?.CodigoPostal ?? ""
            );

            this.cliente.Endereco = endereco
        }
    }
}