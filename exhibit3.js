const exhibit3Component = {
    schema: {
      radius: {type: 'number', default: 2},
    },
    init() {
      this.cameraPosition = new THREE.Vector3()
      this.characterPosition = new THREE.Vector3()
      this.el.sceneEl.camera.getWorldPosition(this.cameraPosition)
      this.camera = document.getElementById('camera')
  
      const pedestal = document.getElementById('exhibit3')
      pedestal.setAttribute('sound', {autoplay: 'true', src: '#vo_e3', volume: '2'})
    },
    tick() {
  
    },
  }
  
  export {exhibit3Component}
  