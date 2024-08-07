import Cliente from "../modelos/valores/cliente";
import Endereco from "../modelos/valores/endereco";
import Documento from '../modelos/valores/documento';
import Telefone from "../modelos/valores/telefone";
import Entrada from "../teste/entrada";
import { TipoDocumento } from "../enumeracoes/tipoDocumento"
const prompt = require('prompt-sync')();

export default function Cadastrar (clientes: Cliente[] = []): void {

    let cliente = new Cliente();
    let dependentes = new Cliente();
    cliente.Nome = prompt("Nome: ");
    cliente.NomeSocial = prompt("Nome Social: ");
    cliente.DataNascimento = new Date(prompt("Data de Nascimento: "));
    cliente.DataCadastro = new Date(prompt("Data de Cadastro: "));
    cliente.Titular = cliente;
    
    console.log(`\nEndereço:`);
    let endereco = new Endereco();
    endereco.Rua = prompt("Rua: ");
    endereco.Bairro = prompt("Bairro: ");
    endereco.Cidade = prompt("Cidade: ");
    endereco.Estado = prompt("Estado: ");
    endereco.CodigoPostal = prompt("Código Postal: ");
    cliente.Endereco = endereco
    
    
    let numTelefones = parseInt(prompt("\nQuantos telefones deseja cadastrar? "));
    for (let i = 0; i < numTelefones; i++) {
        let telefone = new Telefone();
        telefone.Ddd = prompt("DDD do telefone " + (i+1) + ": ");
        telefone.Numero = prompt("Número do telefone " + (i+1) + ": ");
        console.log("\n")
        cliente.Telefones.push(telefone);
        
    }
    
    let dependentesOpc = parseInt(prompt("Quantos dependentes deseja cadastrar? "));
    for (let i = 0; i < dependentesOpc; i++) {
        dependentes.Nome = prompt("Nome do dependente " + (i+1) + ": ");
        dependentes.NomeSocial = prompt("Nome Social do dependente " + (i+1) + ": ");
        dependentes.DataNascimento = new Date(prompt("Data de Nascimento: "));
        dependentes.DataCadastro = new Date(prompt("Data de Cadastro: "));
        dependentes.Endereco = (cliente.Endereco.clonar() as Endereco)
        dependentes.Telefones = cliente.Telefones.map((telefone: Telefone) => telefone.clonar()) as Telefone[];
        dependentes.Titular = cliente;
        cliente.Dependentes.push(dependentes);
        
        console.log("\n");
    }
    
    clientes.push(cliente);
    console.log("Cadastrado com sucesso!");

    
}