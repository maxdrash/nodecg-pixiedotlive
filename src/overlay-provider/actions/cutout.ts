const CUTOUT_UPDATE = 'cutout/UPDATE'

interface Cutout {
  top: string
  left: string
  bottom: string
  right: string
  height: string
  width: string
}

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
