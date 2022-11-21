class EcommerceCard extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow ({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "productcard");

        const image = document.createElement("img");
        image.setAttribute("class", "image");
        image.src = this.getAttribute("photo") || "/src/image/foto default.jpg";

        const title = document.createElement("h1");
        title.textContent = this.getAttribute("title");

        componentRoot.appendChild(image);
        componentRoot.appendChild(title);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
            .productcard {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                border: 1px solid white;
                max-width: 380px;
                min-width: 380px;

                border-radius: 20px;
                text-decoration: none;
            }

            .image {
                width: 100%;
                height: 380px;

                border-radius: 20px;
            }

            .title {
                width: 100%;
            }
        `;

        return style;
    }
}

customElements.define('product-card', EcommerceCard);