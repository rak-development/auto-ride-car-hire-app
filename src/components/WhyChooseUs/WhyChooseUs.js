import template from './WhyChooseUs.template'
import styles from './WhyChooseUs.module.scss'

const buildCircleContent = circleContentData => {
  const { length } = circleContentData
  const div = 360 / length;
  const radius = 255;
  const contentCircle = document.querySelector('#content-circle');
  const offsetToParentCenter = parseInt(contentCircle.offsetWidth / 2); //assumes parent is square
  const offsetToChildCenter = 32;
  const totalOffset = offsetToParentCenter - offsetToChildCenter;

  for (var i = 0; i < length; ++i) {
    const { title } = circleContentData[i]
    const circleItem = document.createElement('div');
    circleItem.className = 'circle-item';

    const itemIconContainer = document.createElement('span')
    itemIconContainer.className = 'circle-item__circle';

    const itemIcon = document.createElement('i')
    itemIcon.className = 'fa-solid fa-check circle-item__icon';

    const itemLabel = document.createElement('span')
    itemLabel.className = 'circle-item__label';
    itemLabel.innerText = title
    
    const y = Math.sin((div * i) * (Math.PI / 180)) * radius;
    const x = Math.cos((div * i) * (Math.PI / 180)) * radius;

    const isOffsetLeftOrRight = x + totalOffset >= offsetToParentCenter
    const isOffsetTopBelow0 = y + totalOffset <= 0
    const isOffsetBottom90 = y + totalOffset >= (90 / 100) * contentCircle.offsetHeight

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
    circleItem.classList.add(textClassPosition)

    circleItem.style.top = (y + totalOffset).toString() + 'px';
    if (circleItem.classList.contains(textLeftClass)) {
      circleItem.style.left = (x - totalOffset).toString() + 'px';
    } else if (circleItem.classList.contains(textBottomClass)) {
      circleItem.style.left = (x).toString() + 'px';
    } else if (circleItem.classList.contains(textTopClass)) {
      circleItem.style.top = (y + (totalOffset - 60)).toString() + 'px';
      circleItem.style.left = (x).toString() + 'px';
    } else {
      circleItem.style.left = (x + totalOffset).toString() + 'px';
    }

    itemIconContainer.appendChild(itemIcon)
    circleItem.appendChild(itemIconContainer)
    circleItem.appendChild(itemLabel)
    contentCircle.appendChild(circleItem);
  }
}

export class WhyChooseUs extends HTMLElement {
  constructor() {
    super();

    this.circleContent = [
      {
        id: 1,
        title: 'FIRST-RATE CUSTOMER SERVICE'
      },
      {
        id: 2,
        title: 'CLEAN AND WELL-MAINTAINED VEHICLES'
      },
      {
        id: 3,
        title: 'INNOVATIVE USE OF TECHNOLOGY'
      },
      {
        id: 4,
        title: 'PUNCTUALITY AND VERACITY'
      },
      {
        id: 5,
        title: 'PURSUIT OF CONTINUOUS IMPROVEMENT'
      },
      {
        id: 6,
        title: 'SAFETY AS OUR HIGHEST PRIORITY'
      },
      {
        id: 7,
        title: 'HIGHLY TRAINED PROFESSIONAL DRIVERS'
      },
    ]

    this.sectionData = {
      bgMode: 'bg-white',
      subheader: 'Why Choose Us',
      header: 'Proudly Serving the Oakland Area Since 2007',
      valueNumber: this.circleContent.length
    }
  }

  connectedCallback() {
    this.innerHTML = template(styles, this.sectionData)
    buildCircleContent(this.circleContent)
  }
}
