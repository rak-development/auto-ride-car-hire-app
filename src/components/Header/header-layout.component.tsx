import HeaderTop from "./header-top/header-top.component";
import HeaderMiddle from "./header-middle/header-middle.component";
import HeaderBottom from "./header-bottom/header-bottom.component";

const HeaderLayout: React.FC = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
    </header>
  )
}

export default HeaderLayout;
