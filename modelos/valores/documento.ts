import { TipoDocumento } from "../../enumeracoes/tipoDocumento";

export default class Documento {
    public Numero: string
    public Tipo: TipoDocumento | String
    public DataExpedicao: Date
}