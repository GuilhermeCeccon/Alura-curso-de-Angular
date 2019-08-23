class Views {
    constructor(selector) {
        this._elemento = $(selector);
    }
    update(model) {
        this._elemento.html(this.template(model));
    }
}
