const exhibit1Component = {
    schema: {
      radius: {type: 'number', default: 2},
    },
    init() {
      this.cameraPosition = new THREE.Vector3()
      this.characterPosition = new THREE.Vector3()
      this.el.sceneEl.camera.getWorldPosition(this.cameraPosition)
      const cam = document.getElementById('camera')
      const backButton = document.querySelector('.backButton')
      backButton.style.display = 'none'
  
      const pedestal = document.getElementById('exhibit1')
      pedestal.setAttribute('sound', {autoplay: 'true', src: '#vo_e1', volume: '2'})
  
      const churchSphere = document.getElementById('church')
      const salzburgSphere = document.getElementById('salzburg')
      const klavier = document.getElementById('klavier')
  
      churchSphere.addEventListener('click', () => {
        churchSphere.setAttribute('scale', '100 100 100')
        churchSphere.removeAttribute('animation')
        backButton.style.display = 'block'
      })
  
      salzburgSphere.addEventListener('click', () => {
        salzburgSphere.setAttribute('scale', '100 100 100')
        salzburgSphere.removeAttribute('animation')
        backButton.style.display = 'block'
      })
  
      klavier.addEventListener('click', () => {
        pedestal.components.sound.pauseSound()
        klavier.setAttribute('sound', {autoplay: 'true', src: '#klavierAudio', volume: '2'})
        backButton.style.display = 'block'
        // klavier.addEventListener('click', () => {
        //   this.object3D.components.sound.playSound()
        //   klavier.removeAttribute('sound')
        // })
      })
  
      backButton.addEventListener('click', () => {
        churchSphere.setAttribute('scale', '0.6 0.6 0.6')
        churchSphere.setAttribute('animation', {
          property: 'rotation',
          from: '0 0 0',
          to: '0 360 0',
          loop: 'true',
          dur: '10000',
          easing: 'linear',
        })
        salzburgSphere.setAttribute('scale', '0.6 0.6 0.6')
        salzburgSphere.setAttribute('animation', {
          property: 'rotation',
          from: '0 0 0',
          to: '0 360 0',
          loop: 'true',
          dur: '10000',
          easing: 'linear',
        })
        klavier.removeAttribute('sound')
        pedestal.components.sound.playSound()
        backButton.style.display = 'none'
      })
    },
    tick() {
    },
  }
  
  export {exhibit1Component}
  