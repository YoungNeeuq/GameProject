import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from './store'
interface CounterState {
  result: string
  computerChoose: number
  numberOfTurns: number
}
const initialState: CounterState = {
  result: '',
  computerChoose: 1,
  numberOfTurns: 0
}
export const playSlice = createSlice({
  name: 'play',
  initialState,
  reducers: {
    playGame: (state, action) => {
      ;(state.numberOfTurns += 1),
        (state.result = action.payload.result),
        (state.computerChoose = action.payload.computerChoose)
    }
  }
})

// Action creators are generated for each case reducer function
export const { playGame } = playSlice.actions
export const handleGame = (state: RootState) => state.play
export default playSlice.reducer
