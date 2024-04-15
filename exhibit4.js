const exhibit4Component = {
    schema: {
      radius: {type: 'number', default: 2},
    },
    init() {
      this.cameraPosition = new THREE.Vector3()
      this.characterPosition = new THREE.Vector3()
      this.el.sceneEl.camera.getWorldPosition(this.cameraPosition)
      this.camera = document.getElementById('camera')
  
      const pedestal = document.getElementById('exhibit4')
      pedestal.setAttribute('sound', {autoplay: 'true', src: '#vo_e4', volume: '2'})
    },
    tick() {
      
    },
  }
  
  export {exhibit4Component}
  