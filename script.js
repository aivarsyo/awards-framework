import Glide from '@glidejs/glide';

document.addEventListener("DOMContentLoaded", init);

function init(){
slide();
}

function slide(){
    var glide = new Glide('.glide', {
        type: 'carousel',
        perView: 5,
        focusAt: 3,
        autoplay: true,
        animationDuration: 10000,
        animationTimingFunc: 'linear',
        gap: 20
      })

      document.querySelector(".glide").addEventListener('input', function (event) {
        glide.update({
          autoplay: (event.target.value != 0) ? event.target.value : false
        })
      })


glide.mount()

}