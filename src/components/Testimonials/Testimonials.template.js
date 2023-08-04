import image from '/src/assets/images/AutoRide-Testimonials.jpeg'
import { Carousel } from '../../classes/Carousel';

const template = (styles, slides) => {
  
  window.onload = function() {
    new Carousel(slides, {
      width: "clamp(320px, 75vw, 800px)",
      height: "clamp(240px, 75vh, 600px)",
      infinite: true,
      dots: true,
      arrows: true,
      autoTransition: true,
      autoTransitionDelay: 3000
    }, document.getElementById('test'))
  }

  return `
    <div class='${styles['testimonials']}'>
      <div class='container-fluid'>
        <div class='row'>
          <div class='col-md-6 p-0'>
            <div class='${styles['testimonials__carousel-wrapper']}'>

              <div id='test'></div>

            </div>
          </div>
          <div class='col-md-6 p-0 d-flex'>
            <div class='${styles['testimonials__image']} flex-grow-1' style='background-image: url(${image})'>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}



export default template
