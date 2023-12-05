const initState = {
  result: '',
  computerChoose: 1,
  numberOfTurns: 0
}
// eslint-disable-next-line no-unused-vars
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'play':
      return {
        ...state,
        result: action.payload.result,
        numberOfTurns: state.numberOfTurns + 1,
        computerChoose: action.payload.computerChoose
      }
    default:
      return state
  }
}
export default rootReducer
