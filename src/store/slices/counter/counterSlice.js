import { createSlice } from '@reduxjs/toolkit'
let counter = 0

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: counter
  },
  reducers: {
    incremented: state => {
      state.counter += 1
    },
    incrementedBy: (state, action) => {
      state.counter += action.payload
    },
    decremented: state => {
      state.counter -= 1
    },
    reset : (state) => { 
        state.counter = counter
    }
  }
})

export const { incremented, decremented, incrementedBy, reset } = counterSlice.actions
