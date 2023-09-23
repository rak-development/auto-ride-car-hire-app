const prepareInitialPositions = (index, coreValues) => {
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

  return { totalOffset, x, y, isOffsetLeftOrRight, isOffsetTopBelow0, isOffsetBottom90 }
}

const textPositionClasses = {
  textTopClass: 'circle-item__text-top',
  textBottomClass: 'circle-item__text-bottom',
  textLeftClass: 'circle-item__text-left',
  textRightClass: 'circle-item__text-right'
}

const prepareTextPosition = (isOffsetTopBelow0, isOffsetBottom90, isOffsetLeftOrRight) => {
  const { textTopClass, textBottomClass, textLeftClass, textRightClass } = textPositionClasses

  let textClassPosition
  if (isOffsetTopBelow0) {
    textClassPosition = textTopClass
  } else if (isOffsetBottom90) {
    textClassPosition = textBottomClass
  } else {
    textClassPosition = isOffsetLeftOrRight ? textRightClass : textLeftClass
  }

  return textClassPosition
}

const prepareElementPosition = (totalOffset, x, y, textClassPosition) => {
  const { textTopClass, textBottomClass, textLeftClass } = textPositionClasses

  let customY = y + totalOffset
  let customX = x + totalOffset

  switch (textClassPosition) {
    case textLeftClass:
      customX = x - totalOffset
      break;
    case textBottomClass:
      customX = x
      break;
    case textTopClass:
      customY = (y + (totalOffset - 60))
      customX = x
      break;
  }

  return `top: ${customY}px; left: ${customX}px`
}

const setElementPosition = (index, coreValues) => {
  const { 
    totalOffset, 
    x, 
    y, 
    isOffsetLeftOrRight, 
    isOffsetTopBelow0, 
    isOffsetBottom90 
  } = prepareInitialPositions(index, coreValues)

  const textClassPosition = prepareTextPosition(isOffsetTopBelow0, isOffsetBottom90, isOffsetLeftOrRight)
  const elementPosition = prepareElementPosition(totalOffset, x, y, textClassPosition)

  return { textClassPosition, elementPosition }
}

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
            const { textClassPosition, elementPosition } = setElementPosition(index, coreValues)
            return `
              <div 
                class='circle-item ${textClassPosition}'
                id='${el.id}'
                style='${elementPosition}'
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
