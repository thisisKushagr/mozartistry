// Copyright (c) 2022 8th Wall, Inc.
//
// app.js is the main entry point for your 8th Wall app. Code here will execute after head.html
// is loaded, and before body.html is loaded.

import './index.css'

import {proximityTriggerComponent} from './proximity-trigger'
AFRAME.registerComponent('proximity-trigger', proximityTriggerComponent)

import {splashImageComponent} from './splash-screen'
AFRAME.registerComponent('splash-screen', splashImageComponent)

import {exhibit1Component} from './exhibit1'
AFRAME.registerComponent('exhibit1-component', exhibit1Component)

import {exhibit2Component} from './exhibit2'
AFRAME.registerComponent('exhibit2-component', exhibit2Component)

import {exhibit3Component} from './exhibit3'
AFRAME.registerComponent('exhibit3-component', exhibit3Component)

import {exhibit4Component} from './exhibit4'
AFRAME.registerComponent('exhibit4-component', exhibit4Component)

import {exhibit5Component} from './exhibit5'
AFRAME.registerComponent('exhibit5-component', exhibit5Component)

import {exhibit6Component} from './exhibit6'
AFRAME.registerComponent('exhibit6-component', exhibit6Component)

AFRAME.registerComponent('no-cull', {
  init() {
    this.el.addEventListener('model-loaded', () => {
      this.el.object3D.traverse(obj => obj.frustumCulled = false)
    })
  },
})

import {lookAtComponent} from './look-at'
AFRAME.registerComponent('look-at', lookAtComponent)
