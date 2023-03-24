import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import template from './AppLayout.template'

import '../../../styles/Base.scss'

class AppLayout {
  constructor () {
    this.headerTemplate = new Header()
    this.footerTemplate = new Footer()
  }

  start = () => this.render()
  render = () => {
    document.body.insertAdjacentHTML('afterbegin', template(
      this.headerTemplate.getEl(),
      this.footerTemplate.getEl()
    ))
  }
}

export default AppLayout
