import '../Header/HeaderLayout'
import '../../../styles/Base.scss'

class AppLayout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div>
        <header-layout></header-layout>
      </div>
    `
  }
}

customElements.define('app-layout', AppLayout)
