const getBRB = (state: any) => state.brb

const isAway = (state: any) => getBRB(state).isAway

const getMessage = (state: any) => getBRB(state).message

export { getBRB, isAway, getMessage }
