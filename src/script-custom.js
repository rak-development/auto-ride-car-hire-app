const scrollToTopButton = document.getElementById('scroll-to-top')

const scrollFunction = () => {
  if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000) {
    scrollToTopButton.style.opacity = '1'
  } else {
    scrollToTopButton.style.opacity = '0'
  }
}

window.onscroll = () => { scrollFunction() }

scrollToTopButton.addEventListener('click', () => {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
})
