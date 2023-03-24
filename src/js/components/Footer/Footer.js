import FooterTop from './FooterTop/FooterTop'
import FooterMiddle from './FooterMiddle/FooterMiddle'
import FooterBottom from './FooterBottom/FooterBottom'

import template from './Footer.template'

class Footer {
  constructor () {
    this.footerTop = new FooterTop()
    this.footerMiddle = new FooterMiddle()
    this.footerBottom = new FooterBottom()
    this.el = document.createElement('footer')
  }

  getEl = () => {
    this.render()
    return this.el
  }

  render = () => {
    this.el.innerHTML = template(
      this.footerTop.getEl(),
      this.footerMiddle.getEl(),
      this.footerBottom.getEl()
    )
  }
}

export default Footer
