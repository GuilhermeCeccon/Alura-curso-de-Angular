import { logarTempoDeExecucao } from '../helpers/decorators/index';

export abstract class Views<T> {

    protected _elemento: JQuery;
    private _escapar: boolean;

    constructor(selector: string, escapar?: boolean) {

        this._elemento = $(selector);
        this._escapar = escapar;
    }

    @logarTempoDeExecucao()
    update(model: T) {

        let template = this.template(model);
        if (this._escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        this._elemento.html(this.template(model));

    }
    abstract template(model: T): string;

}

