import { Cutout } from 'nodecg-twitchie-graphics'

const CUTOUT_UPDATE = 'cutout/UPDATE'

interface UpdateCutoutAction {
  type: typeof CUTOUT_UPDATE
  payload: Cutout
}

type CutoutActions = UpdateCutoutAction

const updateCutout = (coords: Cutout): CutoutActions => ({
  type: CUTOUT_UPDATE,
  payload: coords,
})

export { CUTOUT_UPDATE, updateCutout, CutoutActions }
