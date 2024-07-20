import Entrada from "./teste/entrada";
import ListarClientes from "./servicos/listarCliente";
import CadastrarCliente from "./servicos/cadastrarCliente";
import Cliente from "./modelos/valores/cliente";
import Telefone from "./modelos/valores/telefone";
import Endereco from "./modelos/valores/endereco";
import Documento from './modelos/valores/documento';

const prompt = require('prompt-sync')();

let opcao = 10;
const clientes: Cliente[] = [];
let cliente = new Cliente()

function CadatroInicial(): void {
    cliente.nome = `Pedro de Alcântara João Carlos Leopoldo Salvador`
    cliente.nomeSocial = `Dom Pedro II`
    cliente.dataCadastro = new Date(1840, 6, 23)
    cliente.dataNascimento = new Date(1825, 11, 2)
    cliente.titular = cliente

    let endereco = new Endereco()
    endereco.rua = `R. do Catete`
    endereco.bairro = `Copacabana`
    endereco.cidade = `Rio de Janeiro`
    endereco.estado = `Rio de Janeiro`
    endereco.codigoPostal = `22220-000`
    cliente.endereco = endereco

    let telefone = new Telefone();
    telefone.ddd = "21";
    telefone.numero = "2222-3333";
    cliente.telefones.push(telefone);
    let telefones = new Telefone();
    telefones.ddd = "22";
    telefones.numero = "2222-4444";
    cliente.telefones.push(telefones);

    let dependente = new Cliente()
    dependente.nome = `Isabel Cristina Leopoldina Augusta Micaela`
    dependente.nomeSocial = `Princesa Isabel`
    dependente.dataCadastro = new Date(1921, 10, 14)
    dependente.dataNascimento = new Date(1846, 6, 29)
    dependente.endereco = (cliente.endereco.clonar() as Endereco)
    dependente.telefones = (cliente.telefones.map(telefones => telefones.clonar()) as Telefone[])
    dependente.titular = cliente
    cliente.dependentes.push(dependente)

    
    clientes.push(cliente);
}

CadatroInicial();

while (opcao !== 9) {
        console.log("\n\nEscolha uma funcionalidade do sistema: \n  1 - Cadastrar cliente \n  2 - Listar cliente \n  9 - Sair \n ----------");
        opcao = Number(prompt("Escolha uma opção: "));

    if (opcao === 1) {
        CadastrarCliente(clientes);
        

    } else if (opcao === 2) {
        
        
        console.log("\n-----Listagem de Clientes: ");
        ListarClientes(clientes);
        // console.log(Cliente[1]);
        

        console.log("\n-----Listagem de Dependentes: ");
        let clientesTotais = clientes.length;
        for (let index = 0; index < clientesTotais; index++) {
            ListarClientes(clientes[index].dependentes);
        }

        // Listagem(cliente.dependentes);
        // console.log(cliente.dependentes)

        
    } else if (opcao === 9) {
        console.log("\n Saindo do sistema. Até a próxima!\n");
    } else {
        console.log("Opção inválida");
    }
}

