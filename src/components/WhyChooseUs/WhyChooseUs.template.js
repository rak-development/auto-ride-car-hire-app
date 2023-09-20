const template = (styles, circleContentData) => {
  const { header, subheader, coreValues } = circleContentData
  return `
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
  `
}
export default template
