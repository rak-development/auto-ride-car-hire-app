const template = (styles, sectionData) => {
  const { content } = sectionData
  const { coreValues, header, subheader } = content
  return `
    <div class='${styles['section-template']} ${sectionData.bgMode} text-center'>
      <div class='container'>
        <div class='${styles['section-template__subheader']}'>${sectionData.subheader}</div>
        <div class='${styles['section-template__header']}'>${sectionData.header}</div>
      </div>
      <div class='container'>
        <div class='${styles['core-values__container']} position-relative d-none d-xl-block'>
          <div class='${styles['core-values__circle']}'>
            <span class='d-block text-uppercase'>${coreValues.length} ${header}</span>
            <span class='d-block'>${subheader}</span>
          </div>
          <div id='content-circle' class='${styles['core-values__circle']}'></div>
          <div class='${styles['core-values__circle']}'></div>
        </div>
        <div class='${styles['core-values__container']} d-xl-none text-start'>
          <span class='d-block text-uppercase fw-bold my-4'>
            ${coreValues.length} ${header}
            <span class='text-lowercase'>${subheader}</span>
          </span>
          <ul class='${styles['core-values__list']}'>
            ${coreValues.map(({title}) => `
              <li class='d-flex align-items-center ${styles['core-values__list-el']}'>
                <span class='circle-item__circle circle-item__circle-responsive bg-white'>
                  <i class='fa-solid fa-check circle-item__icon circle-item__icon-responsive'></i>
                </span>
                <span class='ps-4 ${styles['core-values__list-title']}'>
                  ${title}
                </span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    </div>
  `
}
export default template
