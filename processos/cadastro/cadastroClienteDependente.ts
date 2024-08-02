import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/valores/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import CadastroEnderecoDependente from "./cadastroEnderecoDependente";
import CadastroTelefoneDependente from "./cadastroTelefoneDependente";

export default class CadastroClienteDependente extends Processo {
    processar(): void {
        console.log('Insira os dados do Titular:');
        const nomeTitular = this.entrada.receberTexto('Qual o nome do titular:');
        const titularEncontrado = Armazem.InstanciaUnica.Clientes.find(
            (cliente) => cliente.Nome === nomeTitular 
        );

        if (!titularEncontrado) {
            console.log(`Titular ${nomeTitular} não encontrado.`);
            return;
        } else if (titularEncontrado) {
            console.log(`Titular ${nomeTitular} encontrado. `);
            console.log('Iniciando o cadastro de um novo cliente dependente... \n****************************');
        }

        const nome = this.entrada.receberTexto('Qual o nome do novo cliente?');
        const nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente?');
        const dataNascimento = this.entrada.receberData('Qual a data de nascimento?');
        const clienteDependente = new Cliente();
        clienteDependente.Nome = nome;
        clienteDependente.NomeSocial = nomeSocial;
        clienteDependente.DataNascimento = dataNascimento;
        
        titularEncontrado.Dependentes.push(clienteDependente);

        this.processo = new CadastroEnderecoDependente(clienteDependente, nomeTitular);
        this.processo.processar();

        this.processo = new CadastrarDocumentosCliente(clienteDependente);
        this.processo.processar();

        this.processo = new CadastroTelefoneDependente(clienteDependente, nomeTitular);
        this.processo.processar();

        

        console.log('Finalizando o cadastro do cliente dependente...');
    }
    
}