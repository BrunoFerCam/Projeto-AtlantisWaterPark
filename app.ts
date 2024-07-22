import Entrada from "./teste/entrada";
import ListarClientes from "./servicos/listarCliente";
import CadastrarCliente from "./servicos/cadastrarCliente";
import Cliente from "./modelos/valores/cliente";
import deletarCliente from "./servicos/deletarCliente";
import Telefone from "./modelos/valores/telefone";
import Endereco from "./modelos/valores/endereco";
import Documento from "./modelos/valores/documento";

console.log(`Inciando sequência de interação com o usuário.`);
console.log(` `)
console.log(` `)
console.log(` `)
console.log(`Bem-vindo/a ao Atlantis Water Park.`);
let execucao = true
while(execucao){
    console.log(`Insira o processo desejado: `)
    console.log(`*---------------------------*`)    
    console.log(`1 - Cadastrar cliente`)
    console.log(`2 - Listar Clientes`)
    console.log(`3 - Deletar Cliente`)
    console.log(`0 - sair`)
    let entrada = new Entrada()
    let opcao = entrada.receberNumero("Insira o número da opção desejada: ");

    if (opcao === 1) {
        console.log("Opção 1");
        CadastrarCliente(clientes);
        
    } else if (opcao === 2) {
        console.log("Opção 2");
        ListarClientes(clientes);
        }
    else if (opcao === 3) {
        console.log("Opção 3");
        deletarCliente(clientes);
    }
    else if (opcao === 0) {
        execucao = false;
    } else {
        console.log("Opção inválida! Por favor, escolha uma opção válida.");
    }
}