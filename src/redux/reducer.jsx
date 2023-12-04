const initState = {
  result: '',
  computerChoose: 0,
  numberOfTurns: 0
}
// eslint-disable-next-line no-unused-vars
const rootReducer = (state = initState, action) => {
  console.log({ state, action })
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
// import { createSlice } from '@reduxjs/toolkit'
// const rootSlice = createSlice({
//   name: 'game',
//   initState: {
//     result: '',
//     computerChoose: 0,
//     numberOfTurns: 0
//   },
//   reducers: {
//     play: (state, action) => {
//       state.result = action.payload.result
//       state.numberOfTurns = state.numberOfTurns + 1
//       state.computerChoose = action.payload.computerChoose
//     }
//   }
// })
// export default rootSlice
