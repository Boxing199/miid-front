const NEWS = {
  newsSlider: function() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: `
        <p class="news-slider-arrow news-slider-arrow-right"><i class="icon icon-arrow"></i><span>пред</span></p>
      `,
      prevArrow: `
         <p class="news-slider-arrow news-slider-arrow-left"><span>след</span><i class="icon icon-arrow"></i></p>
      `,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            nextArrow: false,
            prevArrow: false,
          }
        },{
          breakpoint: 720,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: false,
            prevArrow: false,
          }
        }
      ]
    };

    // initialize the slider
    $('.news-slider').slick(settings);
  }
};

export default NEWS;
