import SocialIcons from '../../SocialIcons/SocialIcons'

import template from './FooterBottom.template'
import styles from './FooterBottom.module.scss'

class FooterBottom {
  constructor () {
    this.el = document.createElement('div')
    this.SocialIcons = new SocialIcons()
    this.el.className = 'footer-bottom'
  }

  getEl = () => {
    this.render()
    return this.el
  }

  render = () => { this.el.innerHTML = template(styles, this.SocialIcons.getEl()) }
}

export default FooterBottom
