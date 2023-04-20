import template from './HeaderTopSocial.template'
import styles from './HeaderTopSocial.module.scss'

class HeaderTopSocial {
  constructor () {
    this.el = document.createElement('div')
  }

  getEl = () => {
    this.render()
    return this.el
  }

  render = () => { this.el.innerHTML = template(styles) }
}

export default HeaderTopSocial
