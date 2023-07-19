const template = (footerTop, footerMiddle, footerBottom) => {
  return `
    ${footerTop.outerHTML}
    ${footerMiddle.outerHTML}
    ${footerBottom.outerHTML}
  `
}
export default template
