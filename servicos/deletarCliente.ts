import Cliente from "../modelos/valores/cliente";
import promptSync from 'prompt-sync';

const prompt = promptSync();

export default function deletarCliente(clientes: Cliente[]): void {
    if (clientes.length === 0) {
        console.log("Nenhum cliente cadastrado.");
        return;
    }

    console.log(`\n=====> Lista de Clientes Registrados <=====`);

    clientes.forEach((cliente, index) => {
        console.log(`\nCliente ${index + 1}:`);
        console.log(`Nome: ${cliente.Nome}`);
        console.log(`Nome Social: ${cliente.NomeSocial}`);
        console.log(`Data de Nascimento: ${cliente.DataNascimento.toDateString()}`);
        console.log(`Data de Cadastro: ${cliente.DataCadastro.toDateString()}`);
        console.log(`Endereço: ${cliente.Endereco.Rua}, ${cliente.Endereco.Bairro}, ${cliente.Endereco.Cidade}, ${cliente.Endereco.Estado}, ${cliente.Endereco.CodigoPostal}`);

        cliente.Telefones.forEach((telefone, telIndex) => {
            console.log(`Telefone ${telIndex + 1}: (${telefone.Ddd}) ${telefone.Numero}`);
        });

        cliente.Documentos.forEach((documento, docIndex) => {
            console.log(`Documento ${docIndex + 1}: Tipo: ${documento.Tipo}, Número: ${documento.Numero}, Data de Emissão: ${documento.DataExpedicao.toDateString()}`);
        });

        if (cliente.Dependentes.length > 0) {
            console.log("\nDependentes:");
            cliente.Dependentes.forEach((dependente, depIndex) => {
                console.log(`Dependente ${depIndex + 1}:`);
                console.log(`   Nome: ${dependente.Nome}`);
                console.log(`   Nome Social: ${dependente.NomeSocial}`);
                console.log(`   Data de Nascimento: ${dependente.DataNascimento.toDateString()}`);
                console.log(`   Data de Cadastro: ${dependente.DataCadastro.toDateString()}`);
                console.log(`   Endereço: ${dependente.Endereco.Rua}, ${dependente.Endereco.Bairro}, ${dependente.Endereco.Cidade}, ${dependente.Endereco.Estado}, ${dependente.Endereco.CodigoPostal}`);
                dependente.Telefones.forEach((telefone, depTelIndex) => {
                    console.log(`   Telefone ${depTelIndex + 1}: (${telefone.Ddd}) ${telefone.Numero}`);
                });
                dependente.Documentos.forEach((documento, depDocIndex) => {
                    console.log(`   Documento ${depDocIndex + 1}: Tipo: ${documento.Tipo}, Número: ${documento.Numero}, Data de Emissão: ${documento.DataExpedicao.toDateString()}`);
                });
            });
        } else {
            console.log("   Não há dependentes registrados para este cliente.");
        }
    });

    const clienteIndex = prompt("Digite o número do cliente que deseja deletar: ");
    const index = parseInt(clienteIndex) - 1;

    if (index >= 0 && index < clientes.length) {
        clientes.splice(index, 1);
        console.log("Cliente deletado com sucesso.");
    } else {
        console.log("Cliente não encontrado.");
    }
}
