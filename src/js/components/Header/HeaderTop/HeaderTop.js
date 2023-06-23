import SocialIcons from '../../SocialIcons/SocialIcons'
import HeaderTopContactDetails from './HeaderTopContactDetails/HeaderTopContactDetails'

import template from './HeaderTop.template'
import styles from './HeaderTop.module.scss'

class HeaderTop {
  constructor () {
    this.SocialIcons = new SocialIcons()
    this.headerTopContactDetails = new HeaderTopContactDetails()
    this.el = document.createElement('div')
    this.el.className = 'header-top bg-light'
  }

  getEl = () => {
    this.render()
    return this.el
  }

  render = () => {
    this.el.innerHTML = template(
      this.SocialIcons.getEl(),
      this.headerTopContactDetails.getEl(),
      styles
    )
  }
}

export default HeaderTop
