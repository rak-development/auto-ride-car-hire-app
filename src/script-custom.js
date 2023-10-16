const scrollToTopButton = document.getElementById('scroll-to-top')

window.addEventListener('scroll', () => {
  if (window.scrollY > 3000) {
    scrollToTopButton.classList.add('d-flex')
  } else {
    scrollToTopButton.classList.remove('d-flex')
  }
});

scrollToTopButton.addEventListener('click', () => {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
})
