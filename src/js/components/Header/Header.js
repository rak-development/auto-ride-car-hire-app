import HeaderTop from './HeaderTop/HeaderTop'
import HeaderMiddle from './HeaderMiddle/HeaderMiddle'
import HeaderBottom from './HeaderBottom/HeaderBottom'

import template from './Header.template'

class Header {
  constructor () {
    this.headerTop = new HeaderTop()
    this.headerMiddle = new HeaderMiddle()
    this.headerBottom = new HeaderBottom()
    this.el = document.createElement('header')
  }

  getEl = () => {
    this.render()
    return this.el
  }

  render = () => {
    this.el.innerHTML = template(
      this.headerTop.getEl(),
      this.headerMiddle.getEl(),
      this.headerBottom.getEl()
    )
  }
}

export default Header
