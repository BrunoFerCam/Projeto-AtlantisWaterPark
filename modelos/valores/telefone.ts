import Prototipo from "../../interfaces/prototipo"

export default class Telefone implements Prototipo {
    public Ddd: string
    public Numero: string

    public clonar(): Prototipo {
        let telefone = new Telefone()
        telefone.Ddd = this.Ddd
        telefone.Numero = this.Numero
        return telefone
    }
}