import './HeaderTop/HeaderTop'

class HeaderLayout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div>
        <header-top></header-top>
        <div>Header Middle</div>
        <div>Header Bottom</div>
      </div>
    `
  }
}

customElements.define('header-layout', HeaderLayout)
