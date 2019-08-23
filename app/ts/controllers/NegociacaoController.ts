import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao } from '../models/index';

export class NegociacaoController {
    @domInject('data')
    private _inputData: JQuery;

    @domInject('quantidade')
    private _inputQuantidade: JQuery;

    @domInject('valor')
    private _inputValor: JQuery;
    private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoesViews = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._negociacoesViews.update(this._negociacoes);

    }

    adiciona(event: Event) {
        event.preventDefault();

        let data = new Date(this._inputData.val().replace(/-/g, ','));
        if (this._ehDiaUtil(data)) {
            this._mensagemView.update('somente negociações em dias úteis!');
            return
        }
        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);

        this._negociacoesViews.update(this._negociacoes);
        this._mensagemView.update('Negocição adicionada com sucesso!');

    }
    private _ehDiaUtil(data: Date) {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }
}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}