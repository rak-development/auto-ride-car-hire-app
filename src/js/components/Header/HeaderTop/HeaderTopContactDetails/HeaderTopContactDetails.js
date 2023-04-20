import template from './HeaderTopContactDetails.template'

class HeaderTopContactDetails {
  constructor () {
    this.el = document.createElement('div')
  }

  getEl = () => {
    this.render()
    return this.el
  }

  render = () => { this.el.innerHTML = template() }
}

export default HeaderTopContactDetails