const exhibit6Component = {
    schema: {
      radius: {type: 'number', default: 2},
    },
    init() {
      this.cameraPosition = new THREE.Vector3()
      this.characterPosition = new THREE.Vector3()
      this.el.sceneEl.camera.getWorldPosition(this.cameraPosition)
      this.camera = document.getElementById('camera')
      const backButton = document.querySelector('.backButton')
      backButton.style.display = 'none'
  
      const geburtsSphere = document.getElementById('geburtshaus')
      geburtsSphere.addEventListener('click', () => {
        geburtsSphere.setAttribute('scale', '100 100 100')
        geburtsSphere.removeAttribute('animation')
        backButton.style.display = 'block'
      })
  
      backButton.addEventListener('click', () => {
        geburtsSphere.setAttribute('scale', '0.6 0.6 0.6')
        geburtsSphere.setAttribute('animation', {
          property: 'rotation',
          from: '0 0 0',
          to: '0 360 0',
          loop: 'true',
          dur: '10000',
          easing: 'linear',
        })
        backButton.style.display = 'none'
      })
  
      const flower = document.getElementById('flowers')
      flower.addEventListener('click', () => {
        flower.removeAttribute('gltf-model')
        flower.setAttribute('gltf-model', '#tulips')
        flower.setAttribute('scale', '0.3 0.3 0.3')
        flower.setAttribute('rotation', '0 180 0')
        flower.removeAttribute('animation')
        flower.setAttribute('animation', {
          property: 'position',
          from: '0 2 2',
          to: '0 1 2',
          loop: 'false',
          dur: '2000',
          easing: 'linear',
        })
      })
    },
    tick() {
    },
  }
  
  export {exhibit6Component}
  