System.register(["./Views"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Views_1, MensagemView;
    return {
        setters: [
            function (Views_1_1) {
                Views_1 = Views_1_1;
            }
        ],
        execute: function () {
            MensagemView = class MensagemView extends Views_1.Views {
                template(model) {
                    return `
        <p class="alert alert-info">${model}</p>
        `;
                }
            };
            exports_1("MensagemView", MensagemView);
        }
    };
});
