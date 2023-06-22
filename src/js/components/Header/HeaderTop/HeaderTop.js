import HeaderTopSocial from './HeaderTopSocial/HeaderTopSocial'
import HeaderTopContactDetails from './HeaderTopContactDetails/HeaderTopContactDetails'

import template from './HeaderTop.template'
import styles from './HeaderTop.module.scss'

class HeaderTop {
  constructor () {
    this.headerTopSocial = new HeaderTopSocial()
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
      this.headerTopSocial.getEl(),
      this.headerTopContactDetails.getEl(),
      styles
    )
  }
}

export default HeaderTop
