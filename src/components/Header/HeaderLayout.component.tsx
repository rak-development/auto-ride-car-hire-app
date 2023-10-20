import HeaderTop from "./HeaderTop/HeaderTop.component";
import HeaderMiddle from "./HeaderMiddle/HeaderMiddle.component";
import HeaderBottom from "./HeaderBottom/HeaderBottom.component";

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
