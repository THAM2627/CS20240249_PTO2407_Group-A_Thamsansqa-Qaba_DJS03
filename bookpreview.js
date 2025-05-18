class BookPreview extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }
}

render() {
    const template = document.createElement("template");
    template.innerHTML = `
        <div>
            <img src="${this.image}" />
            <h2>${this.title}</h2>
            <p>${this.author}</p>            
        </div>`
        this.ShadowRoot.innerHTML = template
}

customElements.define('book-preview', BookPreview);
