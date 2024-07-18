import Cliente from "../modelos/valores/cliente";
import Endereco from "../modelos/valores/endereco";
import Documento from '../modelos/valores/documento';
import Telefone from "../modelos/valores/telefone";
import Entrada from "../teste/entrada";
import { TipoDocumento } from "../enumeracoes/tipoDocumento"

export default class CadastrarCliente{

    public  CadastrarCliente(clientes: Cliente[] = []): void {
        console.log(`\nCadastro do cliente`);
        let entrada: Entrada = new Entrada();
        let cliente = new Cliente();

        cliente.nome = entrada.receberTexto(`Informe o nome do cliente: `);
        cliente.nomeSocial = entrada.receberTexto(`Informe o nome social do cliente: `);
        cliente.dataNascimento = entrada.receberData(`Informe a data de nascimento do cliente neste modelo dd/mm/yyyy: `);
        cliente.dataCadastro = new Date();

        let telefone = new Telefone("", "");
        telefone.ddd = entrada.receberTexto(`Informe o ddd do telefone: `);
        telefone.numero = entrada.receberTexto(`Informe o telefone neste modelo xxxxx-xxxx: `);
        cliente.telefones.push(telefone);

        let endereco = new Endereco();
        endereco.rua = entrada.receberTexto(`Informe a rua: `);
        endereco.bairro = entrada.receberTexto(`Informe o bairro: `);
        endereco.cidade = entrada.receberTexto(`Informe a cidade: `);
        endereco.estado = entrada.receberTexto(`Informe o estado: `);
        endereco.codigoPostal = entrada.receberTexto(`Informe o CEP neste modelo xxxxx-xxx: `);
        cliente.endereco = endereco;

        let documentoCPF = new Documento();
        documentoCPF.numero = entrada.receberTexto(`Informe o CPF neste modelo xxx.xxx.xxx-xx: `);
        documentoCPF.tipo = TipoDocumento.CPF;
        documentoCPF.dataExpedicao = entrada.receberData(`Informe a data de expedição do CPF `);
        cliente.documentos.push(documentoCPF);

        let documentoRG = new Documento();
        documentoRG.numero = entrada.receberTexto(`Informe o RG neste modelo xx.xxx.xxx-x: `);
        documentoRG.tipo = TipoDocumento.RG;
        documentoRG.dataExpedicao = entrada.receberData(`Informe a data de expedição do RG `);
        cliente.documentos.push(documentoRG);

        let documentoPassaporte = new Documento();
        documentoPassaporte.numero = entrada.receberTexto(`Informe o passaporte neste modelo xxxxxxxxx: `);
        documentoPassaporte.tipo = TipoDocumento.Passaporte;
        documentoPassaporte.dataExpedicao = entrada.receberData(`Informe a data de expedição do Passaporte `);
        cliente.documentos.push(documentoPassaporte);

        clientes.push(cliente);
        console.log(`Cadastro concluído com sucesso!`);
    
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
}
// Exemplo de uso
// const clientList: Cliente[] = [];
// Cadastrar(clientList);
