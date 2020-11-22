  let bannerOne = anime.timeline({
    easing: 'easeInOutExpo',
    duration: 1000,
    loop: true,
  });
  
  bannerOne
  .add({
    targets: '.banner-1 .text',
    translateX: [-250, 0],
  })
  .add({
    targets: '.banner-1 .mascot',
    translateX: [250, 0],
  },'-=500')
  .add({
    targets: '.banner-1 .text',
    translateX: -250,
    delay: 1000,
  })
  .add({
    targets: '.banner-1 .mascot',
    translateX: 250,
  },'-=1000')



  let bannerTwo = anime.timeline({
    easing: 'easeInOutExpo',
    duration: 1000,
    loop: true,
  });

  bannerTwo.add({
    targets: '.banner-2 .mascot',
    translateX: [-250, 0],
  })
  .add({
    targets: '.banner-2 .badge, .banner-2 .text',
    translateX: [250, 0],
  }, '-=1000')
  .add({
    targets: '.banner-2 .condition',
    translateY: [50, 0],
  })
  .add({
    targets: '.banner-2 .badge',
    keyframes: [
      {translateY: 8},
      {translateY: -2},
      {translateY: 8},
      {translateY: -2},
    ],
    duration: 3000,
    easing: 'easeOutBack',
  })


  let bannerThree = anime.timeline({
    easing: 'easeInOutExpo',
    duration: 1000,
    loop: true,
  });

  bannerThree.add({
    targets: '.banner-3 .stamp',
    translateX: [-15, 0],
    translateY: [10, 0],
    scale: [1.2, 1],
    opacity: [0.6, 1],
    easing: 'easeInCirc',
  })
  .add({
    targets: '.banner-3 .top-mascot',
    opacity: [0, 1],
  }, '-=500')
  .add({
    delay: 3000,
  })
  .add({
    targets: '.banner-3 .stamp',
    translateX: 250,
  })
  .add({
    targets: '.banner-3 .mascot',
    translateX: -250,
  }, '-=1000')
  .add({
    targets: '.banner-3 .condition',
    translateY: 50,
  }, '-=1000');





  let bannerFour = anime.timeline({
    easing: 'easeInOutExpo',
    duration: 1500,
    loop: true,
  });

  bannerFour.add({
    targets: '.banner-4 .logo',
    translateY: [250, 0],
  })
  .add({
    targets: '.banner-4 .button',
    opacity: [0, 1],
    easing: 'easeInOutCirc',
  })
  .add({
    targets: '.banner-4 .mascot',
    scale: [0, 1],
    translateY: [50, 0],
    delay: 500,
    duration: 2000,
    easing: 'easeOutCirc',
  })
  .add({
    targets: '.banner-4 .button',
    keyframes: [
      {translateY: 5, scale: 1.1},
      {translateY: -2, scale: 1},
      {translateY: 5, scale: 1.1},
      {translateY: -2, scale: 1},
    ],
    easing: 'easeOutBack',
  })