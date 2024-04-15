// const proximityTriggerComponent = {
//   schema: {
//     radius: {type: 'number', default: 1},
//   },
//   init() {
//     this.pos = this.el.object3D.position
//   },
//   tick() {
//     // get character position
//     const characterPos = document.getElementById('character').object3D.position

//     // calculate distance between character and this entity
//     const distance = Math.hypot(characterPos.x - this.pos.x, characterPos.z - this.pos.z)

//     // enter proximity radius
//     if (distance <= this.data.radius && !this.el.classList.contains('inside')) {
//       this.el.classList.add('inside')
//       this.el.setAttribute('visible', 'false')
//     }

//     // leave proximity radius
//     if (distance > this.data.radius && this.el.classList.contains('inside')) {
//       this.el.classList.remove('inside')
//       this.el.setAttribute('visible', 'true')
//     }
//   },
// }

// export {proximityTriggerComponent}

// const proximityTriggerComponent = {
//   schema: {
//     radius: {type: 'number', default: 2},
//   },
//   init() {
//     this.cameraPosition = new THREE.Vector3()
//     this.characterPosition = new THREE.Vector3()
//     this.el.sceneEl.camera.getWorldPosition(this.cameraPosition)
//   },
//   tick() {
//     const exhibits = document.querySelectorAll('.exhibit')
//     exhibits.forEach((exhibit) => {
//       const exhibitPosition = exhibit.object3D.position
//       const distance = this.cameraPosition.distanceTo(exhibitPosition)

//       // Enter proximity radius
//       if (distance <= this.data.radius) {
//         exhibits.forEach((otherExhibit) => {
//           if (otherExhibit !== exhibit) {
//             otherExhibit.removeAttribute(`${otherExhibit.getAttribute('id')}-component`)
//             console.log(`proximity out ${otherExhibit.getAttribute('id')}`)
//           }
//         })
//         exhibit.setAttribute(`${exhibit.getAttribute('id')}-component`, '')
//         console.log(`proximity in ${exhibit.getAttribute('id')}`)
//       }
//     })
//   },
// }

// export {proximityTriggerComponent}

const proximityTriggerComponent = {
  schema: {
    radius: {type: 'number', default: 4},
  },
  init() {
    this.pos = this.el.object3D.position
    // Add references to the entities you want to check proximity with
    this.entitiesToCheck = ['exhibit1', 'exhibit2', 'exhibit3', 'exhibit4', 'exhibit5']
  },
  tick() {
    // get camera position
    const camera = document.getElementById('camera')
    const cameraPos = camera.object3D.position

    // Loop through each entity to check proximity
    for (let i = 0; i < this.entitiesToCheck.length; i++) {
      const entityPos = document.getElementById(this.entitiesToCheck[i]).object3D.position

      // calculate distance between camera and the current entity
      const distance = Math.hypot(cameraPos.x - entityPos.x, cameraPos.z - entityPos.z)

      const currentEntity = document.getElementById(this.entitiesToCheck[i])
      // console.log(document.getElementById('exhibit1'))
      // enter proximity radius
      if (distance <= this.data.radius && !currentEntity.classList.contains('inside')) {
        currentEntity.classList.add('inside')
        // Perform action when triggered, for example:
        console.log(`Entity ${this.entitiesToCheck[i]} is triggered.`)
        currentEntity.setAttribute(`${this.entitiesToCheck[i]}-component`, '')
        currentEntity.components.sound.playSound()
        const infoTabs = currentEntity.querySelectorAll('.info')
        infoTabs.forEach((tab) => {
          tab.setAttribute('visible', 'true')
        })
        camera.components.sound.pauseSound()
      }

      // leave proximity radius
      if (distance > this.data.radius && currentEntity.classList.contains('inside')) {
        currentEntity.classList.remove('inside')
        // Perform action when leaving proximity, for example:
        console.log(`Entity ${this.entitiesToCheck[i]} is no longer triggered.`)
        currentEntity.removeAttribute(`${this.entitiesToCheck[i]}-component`, '')
        currentEntity.components.sound.stopSound()
        const infoTabs = currentEntity.querySelectorAll('.info')
        infoTabs.forEach((tab) => {
          tab.setAttribute('visible', 'false')
        })
        camera.components.sound.playSound()
      }
    }
  },
}

export {proximityTriggerComponent}
