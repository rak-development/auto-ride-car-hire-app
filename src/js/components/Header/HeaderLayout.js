import './HeaderTop/HeaderTop'
import template from './HeaderLayout.template'

class HeaderLayout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template()
  }
}

customElements.define('header-layout', HeaderLayout)
