class NegociacaoController {
    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoesViews = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesViews.update(this._negociacoes);

    }

    adiciona(event: Event) {

        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputData.vall().replace(/-/g, ',')),
            parseInt(this._inputQuantidade.vall()),
            parseFloat(this._inputValor.vall())
        );

        this._negociacoes.adiciona(negociacao);

        this._negociacoesViews.update(this._negociacoes);
        this._mensagemView.update('Negocição adicionada com sucesso!');


    }
}