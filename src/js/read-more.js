class ReadMore extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const button = this.querySelector("[data-content-switcher]");
    if (button) {
      button.addEventListener("click", () => this.toggleActive());
    }
  }

  toggleActive() {
    this.classList.toggle("active");
  }
}

customElements.define("read-more", ReadMore);
