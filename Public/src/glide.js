import Glide from '@glidejs/glide'

new Glide('.glide').mount()

var input = document.querySelector('#options-autoplay-input')

var glide = new Glide('#options-autoplay', {
  autoplay: input.value,
  hoverpause: false,
  perView: 1
})

input.addEventListener('input', function (event) {
  glide.update({
    autoplay: (event.target.value != 0) ? event.target.value : false
  })
})

glide.mount()