// const setElementPosition = (index, coreValues) => {
//   const div = 360 / coreValues.length
//   const radius = 255
//   const offsetToParentCenter = 255
//   const offsetToChildCenter = 32
//   const totalOffset = offsetToParentCenter - offsetToChildCenter

//   const y = Math.sin((div * index) * (Math.PI / 180)) * radius
//   const x = Math.cos((div * index) * (Math.PI / 180)) * radius

//   return `top: ${y + totalOffset}px; left: ${x + totalOffset}px`
// }

// const setTextClassPosition = (index, coreValues) => {
//   const textTopClass = 'circle-item__text-top'
//   const textBottomClass = 'circle-item__text-bottom'
//   const textLeftClass = 'circle-item__text-left'
//   const textRightClass = 'circle-item__text-right'

//   const div = 360 / coreValues.length
//   const radius = 255
//   const offsetToParentCenter = 255
//   const offsetToChildCenter = 32
//   const totalOffset = offsetToParentCenter - offsetToChildCenter

//   const y = Math.sin((div * index) * (Math.PI / 180)) * radius
//   const x = Math.cos((div * index) * (Math.PI / 180)) * radius

//   const isOffsetLeftOrRight = x + totalOffset >= offsetToParentCenter
//   const isOffsetTopBelow0 = y + totalOffset <= 0
//   const isOffsetBottom90 = y + totalOffset >= (90 / 100) * 510

//   let textClassPosition
//   if (isOffsetTopBelow0) {
//     textClassPosition = textTopClass
//   } else if (isOffsetBottom90) {
//     textClassPosition = textBottomClass
//   } else {
//     textClassPosition = isOffsetLeftOrRight ? textRightClass : textLeftClass
//   }

//   return textClassPosition
// }

const template = (styles, circleContentData) => {
  const { header, subheader, coreValues } = circleContentData
  return `
    <div class='container'>
      <div class='${styles['core-values__container']} position-relative d-none d-xl-block'>
        <div class='${styles['core-values__circle']}'>
          <span class='d-block text-uppercase'>${coreValues.length} ${header}</span>
          <span class='d-block'>${subheader}</span>
        </div>
        <div id='content-circle' class='${styles['core-values__circle']}'>
          ${coreValues.map((el, index) => {
            const div = 360 / coreValues.length
            const radius = 255
            const offsetToParentCenter = 255
            const offsetToChildCenter = 32
            const totalOffset = offsetToParentCenter - offsetToChildCenter

            const y = Math.sin((div * index) * (Math.PI / 180)) * radius
            const x = Math.cos((div * index) * (Math.PI / 180)) * radius

            const isOffsetLeftOrRight = x + totalOffset >= offsetToParentCenter
            const isOffsetTopBelow0 = y + totalOffset <= 0
            const isOffsetBottom90 = y + totalOffset >= (90 / 100) * 510

            const textTopClass = 'circle-item__text-top'
            const textBottomClass = 'circle-item__text-bottom'
            const textLeftClass = 'circle-item__text-left'
            const textRightClass = 'circle-item__text-right'

            let textClassPosition
            if (isOffsetTopBelow0) {
              textClassPosition = textTopClass
            } else if (isOffsetBottom90) {
              textClassPosition = textBottomClass
            } else {
              textClassPosition = isOffsetLeftOrRight ? textRightClass : textLeftClass
            }

            let customY
            let customX

            customY = y + totalOffset
            if (textClassPosition === textLeftClass) {
              customX = x - totalOffset
            } else if (textClassPosition === textBottomClass) {
              customX = x
            } else if (textClassPosition === textTopClass) {
              customY = (y + (totalOffset - 60))
              customX = x
            } else {
              customX = x + totalOffset
            }

            return `
              <div 
                class='circle-item ${textClassPosition}'
                id='${el.id}'
                style='top: ${customY}px; left: ${customX}px'
                >
                <span class='circle-item__circle bg-white'>
                  <i class='fa-solid fa-check circle-item__icon'></i>
                </span>
                <span class='circle-item__label'>${el.title}</span>
              </div>
            `
          }).join('')}
        </div>
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
