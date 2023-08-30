const template = (styles, sectionData) => {
  return `
    <div class='${styles['section-template']} ${sectionData.bgMode} text-center'>
      <div class='container'>
        <div class='${styles['section-template__subheader']}'>${sectionData.subheader}</div>
        <div class='${styles['section-template__header']}'>${sectionData.header}</div>
      </div>
      <div class='container'>
        <div class='${styles['core-values__container']} position-relative'>
          <div class='${styles['core-values__circle']}'>
            <span class='d-block'>${sectionData.valueNumber} CORE VALUES</span>
            <span class='d-block'>That make us the best transportation company in the area</span>
          </div>
          <div id='content-circle' class='${styles['core-values__circle']}'></div>
          <div class='${styles['core-values__circle']}'></div>
        </div>
      </div>
    </div>
  `
}
export default template
