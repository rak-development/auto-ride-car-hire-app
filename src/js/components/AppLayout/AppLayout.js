import '../Header/HeaderLayout'
import '../../../styles/Base.scss'

import template from './AppLayout.template'

class AppLayout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template()
  }
}

customElements.define('app-layout', AppLayout)
