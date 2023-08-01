const template = (styles, sectionData) => {
  return `
    <div class='${styles['section-template']} ${sectionData.bgMode} text-center'>
      <div class='container'>
        <div class='${styles['section-template__subheader']}'>${sectionData.subheader}</div>
        <div class='${styles['section-template__header']}'>${sectionData.header}</div>
        ${sectionData.sectionContent}
      </div>
    </div>
  `
}
export default template
