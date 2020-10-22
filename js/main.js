// site https://owlcarousel2.github.io/OwlCarousel2/demos/basic.html
// exemplo pronto em jquery

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
//   quando tela tiver 600px ira mostrar 3 imagens
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})