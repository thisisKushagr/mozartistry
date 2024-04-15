// const splashImageComponent = {
//   schema: {
//     disableWorldTracking: {type: 'bool', default: false},
//     requestGyro: {type: 'bool', default: false},
//   },
//   init() {
//     const splashImage = document.getElementById('splash')
//     const carouselContainer = document.querySelector('.carousel-container')

//     const addXRWeb = () => {
//       if (this.data.requestGyro === true && this.data.disableWorldTracking === true) {
//         // If world tracking is disabled, and you still want gyro enabled (i.e. 3DoF mode)
//         // Request motion and orientation sensor via XR8's permission API
//         XR8.addCameraPipelineModule({
//           name: 'request-gyro',
//           requiredPermissions: () => ([XR8.XrPermissions.permissions().DEVICE_ORIENTATION]),
//         })
//       }

//       this.el.sceneEl.setAttribute('xrweb', `allowedDevices: any; disableWorldTracking: ${this.data.disableWorldTracking}`)
//       splashImage.classList.add('hidden')
//     }

//     const startBtn = document.querySelector('.start-btn')
//     startBtn.style.display = 'block'
//     startBtn.onclick = addXRWeb

//     const carousel = document.querySelector('.carousel')
//     const cards = document.querySelectorAll('.card')
//     const prevBtn = document.querySelector('.prev-btn')
//     const nextBtns = document.querySelectorAll('.next-btn')
//     const nextArrowBtn = document.querySelector('.next-arrow-btn')
//     let currentIndex = 0

//     function updateButtonVisibility() {
//       if (currentIndex === 0) {  // Hide left button on the first slide
//         prevBtn.style.display = 'none'
//       } else {
//         prevBtn.style.display = 'block'
//       }

//       if (currentIndex === 2) {  // Show "Start" button only on the third slide
//         startBtn.style.display = 'block'
//         nextBtns.style.display = 'none'  // Hide next button on the last slide
//       } else {
//         nextBtns.style.display = 'block'
//         startBtn.style.display = 'none'
//       }
//     }

//     function updateCarousel() {
//       const cardWidth = cards[0].offsetWidth
//       const offset = -currentIndex * cardWidth
//       carousel.style.transform = `translateX(${offset}px)`
//       updateButtonVisibility()
//     }

//     prevBtn.addEventListener('click', () => {
//       if (currentIndex > 0) {
//         currentIndex--
//         updateCarousel()
//       }
//     })

//     nextBtns.forEach((btn) => {
//       btn.addEventListener('click', () => {
//         if (currentIndex < cards.length - 1) {
//           currentIndex++
//           updateCarousel()
//         } else {
//           // Call another component when "Start" button is clicked
//           addXRWeb()
//         }
//       })
//     })

//     nextArrowBtn.addEventListener('click', () => {
//       if (currentIndex < cards.length - 1) {
//         currentIndex++
//         updateCarousel()
//       }
//     })

//     updateButtonVisibility()
//   },
// }
// export {splashImageComponent}

const splashImageComponent = {
  schema: {
    disableWorldTracking: {type: 'bool', default: false},
    requestGyro: {type: 'bool', default: false},
  },
  init() {
    const splashImage = document.getElementById('splash')
    const carouselContainer = document.querySelector('.carousel-container')
    const carpet = document.getElementById('carpet')
    const infoTabs = document.querySelectorAll('.info')

    const addXRWeb = () => {
      if (this.data.requestGyro === true && this.data.disableWorldTracking === true) {
        // If world tracking is disabled, and you still want gyro enabled (i.e. 3DoF mode)
        // Request motion and orientation sensor via XR8's permission API
        XR8.addCameraPipelineModule({
          name: 'request-gyro',
          requiredPermissions: () => ([XR8.XrPermissions.permissions().DEVICE_ORIENTATION]),
        })
      }

      this.el.sceneEl.setAttribute('xrweb', `allowedDevices: any; disableWorldTracking: ${this.data.disableWorldTracking}`)
      splashImage.classList.add('hidden')
      carpet.setAttribute('animation-mixer', {loop: 'once', clampWhenFinished: 'true'})
      infoTabs.forEach((tab) => {
        tab.setAttribute('visible', 'false')
      })
      // document.getElementById('camera').setAttribute('sound', {autoplay: 'true', src: '#bg', volume: '1'})
    }

    const startBtn = document.querySelector('.start-btn')
    startBtn.style.display = 'none'  // Hide start button initially
    startBtn.onclick = addXRWeb

    const carousel = document.querySelector('.carousel')
    const cards = document.querySelectorAll('.card')
    const nextArrowLeftBtn = document.querySelector('.left-arrow')
    const nextArrowRightBtn = document.querySelector('.right-arrow')
    let currentIndex = 0

    function updateButtonVisibility() {
      if (currentIndex === 0) {  // Hide left button on the first slide
        nextArrowLeftBtn.style.display = 'none'
      } else {
        nextArrowLeftBtn.style.display = 'block'
      }

      if (currentIndex === 2) {  // Show "Start" button only on the third slide
        startBtn.style.display = 'block'
        nextArrowLeftBtn.style.display = 'block'  // Show arrow buttons on the last slide
        nextArrowRightBtn.style.display = 'none'
      } else {
        startBtn.style.display = 'none'
        nextArrowLeftBtn.style.display = 'block'  // Hide arrow buttons on other slides
        nextArrowRightBtn.style.display = 'block'
      }
    }

    function updateCarousel() {
      const cardWidth = cards[0].offsetWidth
      const offset = -currentIndex * cardWidth
      carousel.style.transform = `translateX(${offset}px)`
      updateButtonVisibility()
    }

    nextArrowLeftBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--
        updateCarousel()
      }
    })

    nextArrowRightBtn.addEventListener('click', () => {
      if (currentIndex < cards.length - 1) {
        currentIndex++
        updateCarousel()
      }
    })

    updateButtonVisibility()
  },
}
export {splashImageComponent}
