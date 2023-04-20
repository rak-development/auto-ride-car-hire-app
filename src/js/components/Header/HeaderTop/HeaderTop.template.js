const template = (headerTopSocial, headerTopContactDetails) => {
  return `
    ${headerTopContactDetails.outerHTML}
    ${headerTopSocial.outerHTML}
  `
}
export default template
