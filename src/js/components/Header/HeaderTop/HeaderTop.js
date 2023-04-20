import HeaderTopSocial from "./HeaderTopSocial/HeaderTopSocial"
import HeaderTopContactDetails from './HeaderTopContactDetails/HeaderTopContactDetails'

import template from './HeaderTop.template'

class HeaderTop {
  constructor () {
    this.headerTopSocial = new HeaderTopSocial()
    this.headerTopContactDetails = new HeaderTopContactDetails()
    this.el = document.createElement('div')
    this.el.className = 'header-top container d-flex justify-content-between'
  }

  getEl = () => {
    this.render()
    return this.el
  }

  render = () => { this.el.innerHTML = template(
      this.headerTopSocial.getEl(),
      this.headerTopContactDetails.getEl()
    ) 
  }
}

export default HeaderTop
