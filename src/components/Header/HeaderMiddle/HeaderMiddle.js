import template from './HeaderMiddle.template'
import styles from './HeaderMiddle.module.scss'

class HeaderMiddle {
  constructor () {
    this.el = document.createElement('div')
    this.el.className = 'header-middle'
  }

  getEl = () => {
    this.render()
    return this.el
  }

  render = () => { this.el.innerHTML = template(styles) }
}

export default HeaderMiddle
