const template = (styles, sectionData) => {
  const { bgMode, subheader, header, whatWeOfferData } = sectionData
  const background = bgMode === 'bg-gray-light' ? styles['bg-gray-light'] : ''
  return `
    <div class='${styles['section-template']} ${background} text-center'>
      <div class='container'>
        <div class='${styles['section-template__subheader']}'>${subheader}</div>
        <div class='${styles['section-template__header']}'>${header}</div>
      </div>
      <div class='${styles['what-we-offer']} container'>
        <div class='row row-cols-3 row-cols-md-3 g-4'>
          ${whatWeOfferData.map(({ colSize, title, image }) => `
            <div class='col-md-${colSize}'>
              <div class='card bg-dark text-white rounded-0 border-0'>
                <img class='${styles['what-we-offer__card-img']}' src='${image}' class='card-im g-top' alt='${title}'>
                <div class='${styles['what-we-offer__card-overlay']} card-img-overlay rounded-0 d-flex align-items-end'>
                  <h5 class='card-title'>${title}</h5>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `
}

export default template
