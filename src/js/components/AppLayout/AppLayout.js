import template from './AppLayout.template'

import '../../../styles/Base.scss'

class AppLayout {
  start = () => this.render()
  render = () => document.body.insertAdjacentHTML('afterbegin', template())
}

export default AppLayout
