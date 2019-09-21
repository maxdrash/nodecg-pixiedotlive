const BRB_UPDATE = 'brb/UPDATE'

interface BRBUpdateAction {
  type: typeof BRB_UPDATE
  payload: {
    away: boolean
    message?: string
  }
}

type BRBActions = BRBUpdateAction

const updateBRB = (away: boolean, message?: string): BRBActions => ({
  type: BRB_UPDATE,
  payload: {
    away,
    message,
  },
})

export { BRB_UPDATE, updateBRB, BRBActions }
