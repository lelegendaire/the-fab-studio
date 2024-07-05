export class TheFabStudio extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['url']; // On observe l'attribut `url` pour mettre à jour dynamiquement l'iframe
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'url' && oldValue !== newValue) {
            this.loadIframe(newValue);
        }
    }

    loadIframe(url) {
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', url);
        iframe.setAttribute('frameborder', '0');
        iframe.style.width = '100%';
        iframe.style.height = '100%';

        this.shadowRoot.innerHTML = ''; // Efface le contenu existant
        this.shadowRoot.appendChild(iframe); // Ajoute l'iframe dans le Shadow DOM
    }

    connectedCallback() {
        const url = this.getAttribute('url');
        if (url) {
            this.loadIframe(url);
        }
    }
}

customElements.define('the-fab-studio', TheFabStudio);
