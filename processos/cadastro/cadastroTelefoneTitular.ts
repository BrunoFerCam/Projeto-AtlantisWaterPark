import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/valores/cliente";
import Telefone from "../../modelos/valores/telefone";

export default class CadastroTelefoneTitular extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        console.log('Coletando os dados do telefone...')
        let quantiaTelefones = this.entrada.receberNumero('Quantos telefones?')
        for (let i = 0; i < quantiaTelefones; i++) {
            let ddd = this.entrada.receberTexto('Qual a ddd?')
            let numero = this.entrada.receberTexto('Qual o número?')
            console.log('Cadastrando o telefone...')
            let telefone = new Telefone(ddd, numero)
            this.cliente.Telefones.push(telefone);
        }
        console.log('Finalizando o cadastro de telefones...')
    
    }

}