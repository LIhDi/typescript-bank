import { Despesa } from './Despesa';
import { MeuObjeto } from './MeuObjeto';

export class Despesas implements MeuObjeto<Despesas>{

    private _despesas: Despesa[] = [];

    adiciona(despesa: Despesa): void {

        this._despesas.push(despesa);
    }

    paraArray(): Despesa[] {
        // vamos tratar esse novo array que criamos com base no array de despesas cpmp dp tipo Despesa para não dar erro., pois ele pode ser do tipo undefined e dar erro.
        return ([] as Despesa[]).concat(this._despesas);
    }

    paraTexto(): void {
        console.log('-- paraTexto --');
        console.log(JSON.stringify(this._despesas));
    }
    ehIgual(despesas: Despesas): boolean {
        return JSON.stringify(this._despesas) == JSON.stringify(despesas.paraArray)
    }
}