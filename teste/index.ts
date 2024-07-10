import Cliente from "../modelos/valores/cliente";
import Endereco from "../modelos/valores/endereco";
let cliente = new Cliente()
cliente.nome = `Pedro de Alcântara João Carlos Leopoldo Salvador`
cliente.nomeSocial = `Dom Pedro II`
cliente.dataCadastro = new Date(1840, 6, 23)
cliente.dataNascimento = new Date(1825, 11, 2)
let endereco = new Endereco()
endereco.rua = `R. do Catete`
endereco.bairro = `Copacabana`
endereco.cidade = `Rio de Janeiro`
endereco.estado = `Rio de Janeiro`
endereco.pais = `Brasil`
endereco.codigoPostal = `22220-000`
cliente.endereco = endereco

let dependente = new Cliente()
dependente.nome = `Isabel Cristina Leopoldina Augusta Micaela`
dependente.nomeSocial = `Princesa Isabel`
dependente.dataCadastro = new Date(1921, 10, 14)
dependente.dataNascimento = new Date(1846, 6, 29)
dependente.endereco = (cliente.endereco.clonar() as Endereco)
dependente.titular = cliente
cliente.dependentes.push(dependente)

let segundoCliente = new Cliente()
segundoCliente.nome = `Maria da Glória Joana Carlota Leopoldina da Cruz`
segundoCliente.nomeSocial = `Dona Maria II`
segundoCliente.dataCadastro = new Date(1819, 3, 4)
segundoCliente.dataNascimento = new Date(1819, 4, 4)
segundoCliente.endereco = cliente.endereco.clonar() as Endereco

let terceiroCliente = new Cliente()
terceiroCliente.nome = `Leopoldina Teresa Francisca Carolina Micaela Gabriela Rafaela Gonzaga`
terceiroCliente.nomeSocial = `Princesa Leopoldina`
terceiroCliente.dataCadastro = new Date(1826, 1, 13)
terceiroCliente.dataNascimento = new Date(1847, 7, 13)
terceiroCliente.endereco = cliente.endereco.clonar() as Endereco

console.log(terceiroCliente);
console.log(segundoCliente);
console.log(cliente);
console.log(dependente);
