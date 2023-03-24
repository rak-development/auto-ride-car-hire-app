const template = (headerTemplate, footerTemplate) => {
  console.log(headerTemplate)
  return `
    ${headerTemplate.outerHTML}
    <main><h1>Hello World</h1></main>
    ${footerTemplate.outerHTML}
  `
}

export default template
