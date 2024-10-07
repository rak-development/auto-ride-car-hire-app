import { HeaderTop } from './header-top/header-top.component'
import { HeaderMiddle } from './header-middle/header-middle.component'
import { HeaderBottom } from './header-bottom/header-bottom.component'

export const Header = ({test}: any) => {
  return (
    <header>
      <HeaderTop test={test} />
      <HeaderMiddle />
      <HeaderBottom />
    </header>
  )
}
