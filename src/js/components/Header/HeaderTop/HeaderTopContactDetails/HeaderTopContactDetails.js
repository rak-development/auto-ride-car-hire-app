import template from './HeaderTopContactDetails.template'

import styles from "./HeaderTopContactDetails.module.scss"

class HeaderTopContactDetails {
  constructor () {
    this.el = document.createElement('div')
  }

  getEl = () => {
    this.render()
    return this.el
  }

  render = () => { this.el.innerHTML = template(styles) }
}

export default HeaderTopContactDetails