document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu-svg') ;
  const firstStrokeMenu = document.querySelector('.first-stroke-menu') ;
  const secondStrokeMenu = document.querySelector('.second-stroke-menu') ;
  const thirdStrokeMenu = document.querySelector('.third-stroke-menu') ;
  const logoDiv = document.querySelector('.logo-div') ;

  const nav = document.querySelector('.nav') ;
  const navSections = document.querySelectorAll('.nav-section') ;

  const main = document.querySelector('.main') ;
  const reviews = document.querySelectorAll('.reviews') ;
  const trainingPrograms = document.querySelectorAll('.training-programs') ;
  const fitnessSessions = document.querySelectorAll('.fitness-sessions') ;
  const blogSection = document.querySelectorAll('.blog-section') ;
  const contact = document.querySelector('.contact') ;

  let isMenuClicked = false ;

  firstStrokeMenu.style.transition = 'd 0.15s' ;
  secondStrokeMenu.style.transition = 'opacity 0.15s' ;
  thirdStrokeMenu.style.transition = 'd 0.15s' ;

  menu.addEventListener('click', (event) => {
    event.stopPropagation() ;

    if (!isMenuClicked) {
      openMenu() ;
    } else {
      closeMenu() ;
    }
  }) ;

  document.addEventListener('click', (event) => {
    const nav = document.querySelector('.nav');
    if (!nav.contains(event.target)) {
      closeMenu() ;
    }
  });

  logoDiv.addEventListener('click', () => {
    location.href = 'fitness-master-home.html' ;
  }) ;

  navSections.forEach(navSection => {
    navSection.addEventListener('mouseover', () => {
      navSection.style.fontSize = '18px' ;
      nav.style.width = '180px' ;
      main.style.marginLeft = '190px' ;
    }) ;

    navSection.addEventListener('mouseout', () => {
      // Reset styles when the mouse moves out
      navSection.style.fontSize = '16px' ;
      nav.style.width = '160px' ;

      if (nav.style.left === '-165px') {
        closeMenu() ;

        return ;
      }

      main.style.marginLeft = '170px' ;
    }) ;
  }) ;

  reviews.forEach(reviews => {
    reviews.addEventListener('click', () => {
      location.href = './fitness-master-client-reviews.html' ;
    }) ;
  }) ;

  trainingPrograms.forEach(trainingPrograms => {
    trainingPrograms.addEventListener('click', () => {
      location.href = './fitness-master-training-programs.html' ;
    }) ;
  }) ;

  fitnessSessions.forEach(fitnessSessions => {
    fitnessSessions.addEventListener('click', () => {
      location.href = './fitness-master-fitness-sessions.html' ;
    }) ;
  }) ;

  blogSection.forEach(blogSection => {
    blogSection.addEventListener('click', () => {
      location.href = './fitness-master-blog-section.html' ;
    }) ;
  }) ;

  contact.addEventListener('click', () => {
    location.href = './fitness-master-contact-us.html' ;
  }) ;

  function openMenu() {
    isMenuClicked = true ;
    
    firstStrokeMenu.style.d = 'path("M15 10 L35 30")' ;
    secondStrokeMenu.style.opacity = 0 ;
    thirdStrokeMenu.style.d = 'path("M15 30 L35 10")' ;

    nav.style.left = 0 ;

    main.style.marginLeft = '170px' ;
  }

  function closeMenu() {
    isMenuClicked = false ;
      
    firstStrokeMenu.style.d = 'path("M10 10 L40 10")' ;
    secondStrokeMenu.style.opacity = 1 ;
    thirdStrokeMenu.style.d = 'path("M10 30 L40 30")' ;

    nav.style.left = '-165px' ;

    main.style.marginLeft = 0 ;

    document.removeEventListener('click', closeMenu)
  }
}) ;