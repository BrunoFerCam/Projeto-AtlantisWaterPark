import Entrada from "./teste/entrada";
import ListarClientes from "./servicos/listarCliente";
import CadastrarCliente from "./servicos/cadastrarCliente";
import Cliente from "./modelos/valores/cliente";

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
    console.log(`0 - sair`)
    let entrada = new Entrada()
    let opcao = entrada.receberNumero("Insira o número da opção desejada: ");

    if (opcao === 1) {
        CadastrarCliente;
    } else if (opcao === 2) {
        ListarClientes;
        }
    else if (opcao === 0) {
        execucao = false;
    } else {
        console.log("Opção inválida! Por favor, escolha uma opção válida.");
    }
}