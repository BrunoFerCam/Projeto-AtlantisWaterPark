import Cliente from "../modelos/valores/cliente";
import Endereco from "../modelos/valores/endereco";
import Documento from '../modelos/valores/documento';
import Telefone from "../modelos/valores/telefone";
import promptSync from 'prompt-sync';

const prompt = promptSync();

export default function CadastrarCliente(clientes: Cliente[] = []): void {
    console.log(`\n=====> Novo Registro de Cliente <=====`);

    const cliente = new Cliente();
    cliente.nome = prompt("Informe o nome do cliente: ");
    cliente.nomeSocial = prompt("Informe o nome social do cliente: ");
    cliente.dataNascimento = new Date(prompt("Data de nascimento do cliente (yyyy-mm-dd): "));
    cliente.dataCadastro = new Date(prompt("Data de cadastro do cliente (yyyy-mm-dd): "));
    cliente.titular = cliente;

    console.log(`\n=====> Endereço <=====`);
    const endereco = new Endereco();
    endereco.rua = prompt("Rua: ");
    endereco.bairro = prompt("Bairro: ");
    endereco.cidade = prompt("Cidade: ");
    endereco.estado = prompt("Estado: ");
    endereco.codigoPostal = prompt("CEP: ");
    cliente.endereco = endereco;

    let numTelefones = parseInt(prompt("\nQuantos telefones deseja cadastrar? "), 10);
    for (let i = 0; i < numTelefones; i++) {
        const ddd = prompt("Enter DDD:");
        const numero = prompt("Enter Numero:");
        let telefone = new Telefone(ddd, numero);
        cliente.telefones.push(telefone);
    }

    let numDocumentos = parseInt(prompt("\nQuantos documentos deseja cadastrar? "), 10);
    for (let i = 0; i < numDocumentos; i++) {
        const documento = new Documento();
        documento.tipo = prompt(`Tipo de documento ${i + 1} (CPF, RG ou Passaporte): `);
        documento.numero = prompt(`Número do documento ${i + 1}: `);
        documento.dataExpedicao = new Date(prompt(`Data de emissão do documento ${i + 1} (yyyy-mm-dd): `));
        cliente.documentos.push(documento);
    }

    let numDependentes = parseInt(prompt("Quantos dependentes deseja cadastrar? "), 10);
    for (let i = 0; i < numDependentes; i++) {
        const dependente = new Cliente();
        dependente.nome = prompt(`Nome do dependente ${i + 1}: `);
        dependente.nomeSocial = prompt(`Nome social do dependente ${i + 1}: `);
        dependente.dataNascimento = new Date(prompt(`Data de nascimento do dependente ${i + 1} (yyyy-mm-dd): `));
        dependente.dataCadastro = new Date(prompt(`Data de cadastro do dependente ${i + 1} (yyyy-mm-dd): `));
        dependente.telefones = cliente.telefones.map(telefone => {
            return new Telefone(telefone.ddd, telefone.numero);
        });
        dependente.titular = cliente;
        cliente.dependentes.push(dependente);
    }

    clientes.push(cliente);
    console.log("\nCliente cadastrado com sucesso!");

    // Exibindo detalhes do cliente cadastrado
    console.log("\n=== Detalhes do Cliente ===");
    console.log(`Nome: ${cliente.nome}`);
    console.log(`Nome Social: ${cliente.nomeSocial}`);
    console.log(`Data de Nascimento: ${cliente.dataNascimento.toDateString()}`);
    console.log(`Data de Cadastro: ${cliente.dataCadastro.toDateString()}`);
    console.log(`Endereço: ${cliente.endereco.rua}, ${cliente.endereco.bairro}, ${cliente.endereco.cidade}, ${cliente.endereco.estado}, ${cliente.endereco.codigoPostal}`);
    cliente.telefones.forEach((telefone, index) => {
        console.log(`Telefone ${index + 1}: (${telefone.ddd}) ${telefone.numero}`);
    });
    cliente.documentos.forEach((documento, index) => {
        console.log(`Documento ${index + 1}: Tipo: ${documento.tipo}, Número: ${documento.numero}, Data de Emissão: ${documento.dataExpedicao.toDateString()}`);
    });

    if (cliente.dependentes.length > 0) {
        console.log("\n=== Detalhes dos Dependentes ===");
        cliente.dependentes.forEach((dependente, index) => {
            console.log(`Dependente ${index + 1}:`);
            console.log(`Nome: ${dependente.nome}`);
            console.log(`Nome Social: ${dependente.nomeSocial}`);
            console.log(`Data de Nascimento: ${dependente.dataNascimento.toDateString()}`);
            console.log(`Data de Cadastro: ${dependente.dataCadastro.toDateString()}`);
            if (dependente.endereco) { // Check if endereco is defined
                console.log(`Endereço: ${dependente.endereco.rua}, ${dependente.endereco.bairro}, ${dependente.endereco.cidade}, ${dependente.endereco.estado}, ${dependente.endereco.codigoPostal}`);
            } else {
                console.log("Endereço: Informação não disponível");
            }
            dependente.telefones.forEach((telefone, telIndex) => {
                console.log(`Telefone ${telIndex + 1}: (${telefone.ddd}) ${telefone.numero}`);
            });
            dependente.documentos.forEach((documento, docIndex) => {
                console.log(`Documento ${docIndex + 1}: Tipo: ${documento.tipo}, Número: ${documento.numero}, Data de Emissão: ${documento.dataExpedicao.toDateString()}`);
            });
        });
    } else {
        console.log("\nNão há dependentes registrados para este cliente.");
    }
}

// Exemplo de uso
// const clientList: Cliente[] = [];
// Cadastrar(clientList);
