import template from './SocialIcons.template'
import styles from './SocialIcons.module.scss'

class SocialIcons {
  constructor () {
    this.el = document.createElement('div')
  }

  getEl = () => {
    this.render()
    return this.el
  }

  render = () => { this.el.innerHTML = template(styles) }
}

export default SocialIcons
