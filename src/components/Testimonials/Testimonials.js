import template from './Testimonials.template'
import styles from './Testimonials.module.scss'

export class Testimonials extends HTMLElement {
  constructor() {
    super();

    this.testimonialsData = [
      {
        id: 1,
        // eslint-disable-next-line max-len
        text: 'Praesent odio sapien, iaculis a luctus id, posuere non erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque sit amet ipsum commodo.',
        author: 'Peter Stanbridge'
      },
      {
        id: 2,
        // eslint-disable-next-line max-len
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus nibh arcu, at facilisis felis consectetur non. Proin viverra in ipsum ut lobortis. Duis diam quam, aliquet.',
        author: 'John Stone'
      },
      {
        id: 3,
        // eslint-disable-next-line max-len
        text: 'Morbi pulvinar justo vitae condimentum viverra. Donec tincidunt feugiat lectus, ut vehicula nibh viverra quis. Sed dignissim dolor dolor, et dapibus dui iaculis ac. Nam felis nisl, pharetra id mattis facilisis.',
        author: 'Ponnappa Priya'
      },
      {
        id: 4,
        // eslint-disable-next-line max-len
        text: 'Morbi sapien turpis, posuere vitae neque nec, feugiat fringilla risus. Pellentesque tincidunt eros sed mi porta, vitae dignissim nunc sollicitudin. Proin tempus ut erat at facilisis. Quisque porttitor hendrerit elementum.',
        author: 'Mia Wong'
      },
    ]

    this.slides = [
      {
          title: "Slide 1",
          paragraph: "Lorem ipsum dolor sit amet...",
          backgroundImage:
              // eslint-disable-next-line max-len
              "https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
      },
      {
          title: "Slide 2",
          paragraph: "Lorem ipsum dolor sit amet...",
          backgroundImage:
              // eslint-disable-next-line max-len
              "https://images.unsplash.com/photo-1466853817435-05b43fe45b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2198&q=80"
      },
      {
          title: "Slide 3",
          paragraph: "Lorem ipsum dolor sit amet...",
          backgroundImage:
              // eslint-disable-next-line max-len
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
      },
      {
          title: "Slide 4",
          paragraph: "Lorem ipsum dolor sit amet...",
          backgroundImage:
              // eslint-disable-next-line max-len
              "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2842&q=80"
      }
    ];
  }

  connectedCallback() {
    this.innerHTML = template(styles, this.slides)
  }
}
