import HeaderTop from "./HeaderTop/header-top.component";
import HeaderMiddle from "./HeaderMiddle/header-middle.component";
import HeaderBottom from "./HeaderBottom/header-bottom.component";

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
