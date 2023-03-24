const template = (headerTop, headerMiddle, headerBottom) => {
  return `
    ${headerTop.outerHTML}
    ${headerMiddle.outerHTML}
    ${headerBottom.outerHTML}
  `
}
export default template
