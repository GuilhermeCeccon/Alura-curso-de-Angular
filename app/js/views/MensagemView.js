class MensagemView extends Views {
    template(model) {
        return `
        <p class="alert alert-info">${model}</p>
        `;
    }
}
