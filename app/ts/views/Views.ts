abstract class Views<T> {

    protected _elemento: jQuery;

    constructor(selector: string) {

        this._elemento = $(selector);
    }

    update(model: T) {
        this._elemento.html(this.template(model));
    }
    abstract template(model: T): string;

}