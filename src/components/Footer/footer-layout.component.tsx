import { FooterTop } from "./footer-top/footer-top.component"
import { FooterBottom } from "./footer-bottom/footer-bottom.component"
import { FooterMiddle } from "./footer-middle/footer-middle.component"

export const Footer: React.FC = () => {
  return (
    <footer>
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </footer>
  )
}
