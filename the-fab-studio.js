exportclass TheFabStudio extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['url']; // Observing `url` to dynamically update iframe source
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

        this.shadowRoot.innerHTML = ''; // Clear existing content
        this.shadowRoot.appendChild(iframe);
    }

    connectedCallback() {
        const url = this.getAttribute('url');
        if (url) {
            this.loadIframe(url);
        }
    }
}

customElements.define('the-fab-studio', TheFabStudio);

