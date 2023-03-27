import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import AppLayout from './components/AppLayout/AppLayout'

const appLayout = new AppLayout()

window.onload = async () => {
  appLayout.start()
}
