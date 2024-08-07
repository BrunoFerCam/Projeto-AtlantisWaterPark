import Menu from "../interfaces/menu";

export default class MenuTipoDeleteCliente implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`Qual o tipo do cliente que deve ser removido? `)
        console.log(`----------------------`)
        console.log(`1 - Titular`)
        console.log(`2 - Dependente`)
    }
}