import Prototipo from "../../interfaces/prototipo"

export default class Endereco implements Prototipo {
    public Rua: string
    public Bairro: string
    public Cidade: string
    public Estado: string
    public CodigoPostal: string

    public clonar(): Prototipo {
        let endereco = new Endereco()
        endereco.Rua = this.Rua
        endereco.Bairro = this.Bairro
        endereco.Cidade = this.Cidade
        endereco.Estado = this.Estado
        endereco.CodigoPostal = this.CodigoPostal
        return endereco
    }
}