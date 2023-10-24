import { FooterTop } from "./footer-top/footer-top.component"
import { FooterBottom } from "./footer-bottom/footer-bottom.component"
import { FooterMiddle } from "./FooterMiddle/footer-middle.component"

export const FooterLayout: React.FC = () => {
  return (
    <footer>
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </footer>
  )
}
