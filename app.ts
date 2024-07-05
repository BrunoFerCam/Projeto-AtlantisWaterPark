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
    let opcao = entrada.receberNumero(`Selecione uma das opções digitando o número correspondente:`)
    switch(opcao){
        case 1:
            CadastrarCliente();
            break
        case 2:
            ListarClientes();
            break;
        case 0:
            execucao = false
            console.log(`Fim do atendimento.`)
            break;
        default:
            console.log(`Erro, repita o processo.`)
    }
}