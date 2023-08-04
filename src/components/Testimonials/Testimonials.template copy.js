import image from '/src/assets/images/AutoRide-Testimonials.jpeg'

const template = (styles, testimonialsData) => {
  return `
    <div class='${styles['testimonials']}'>
      <div class='container-fluid'>
        <div class='row'>
          <div class='col-md-6 p-0'>
            <div class='${styles['testimonials__carousel-wrapper']}'>

              <div class='${styles['testimonials__carousel']} w-100 text-center'>
              
                <ul 
                  id='carousel-navigation' 
                  class='${styles['testimonials__nav']} m-0 p-0 d-flex justify-content-center'
                >
                  ${testimonialsData.map(({id}) => `
                    <li class='${styles['testimonials__nav-el']}'>
                      <a 
                        href='#slide-${id}' 
                        class='${styles['testimonials__nav-button']} position-relative d-block'
                      >${id}</a>
                    </li>
                  `).join('')}
                </ul>

                <div id='carousel-slides' class='${styles['testimonials__carousel-slides']} d-flex'>
                  ${testimonialsData.map(({id, text, author}) => `
                    <div class='
                      ${styles['testimonials__slide-wrapper']} 
                      w-100 
                      flex-shrink-0 
                      d-flex 
                      flex-column 
                      align-items-center 
                      justify-content-center 
                      position-relative' 
                    id='slide-${id}'>
                      <div class='${styles['testimonials__slide-icon-wrapper']} position-relative d-inline-block'>
                        <i class='fa-regular fa-comments ${styles['testimonials__slide-icon']} position-absolute'></i>
                        <span class='bg-white d-block'></span>
                      </div>
                      <div class='${styles['testimonials__slide-body']}'>
                        ${text}
                      </div>
                      <div class='${styles['testimonials__slide-author']}'>
                        ${author}
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>

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
