import { createSlice } from '@reduxjs/toolkit'

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    value: 0,
  },
  reducers: {
    toplam:(state, action) => {
      state.value=action.payload.number1+action.payload.number2

    },
    cixma: (state, action) => {
       state.value=action.payload.number1-action.payload.number2
    },
    vurma: (state, action) =>{
       state.value=action.payload.number1*action.payload.number2
    },
    bolme: (state, action) =>{
       state.value=action.payload.number1/action.payload.number2
    },



  },
})

export const { toplam, cixma, vurma,bolme} = calculatorSlice.actions

export default calculatorSlice.reducer