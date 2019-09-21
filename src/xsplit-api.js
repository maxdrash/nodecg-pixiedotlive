/* eslint-disable */
import { ready } from 'xjs-framework/dist/xjs-es2015'

window.SetVolume = function (vol) {
  // no audio elements used on the page (yet)
}

window.GetPlayState = function () {
  // i don't know what this is
}

window.OnSceneLoad = function () {
  // called when xsplit renders a screen (including on preview)
}

if (window.external && window.external.SetLocalProperty) {
  // requests that XSplit lets this browser source run at 60fps,
  // otherwise it'd be locked at 30 by default
  window.external.SetLocalProperty('prop:Browser60fps', '1')
}

ready()
