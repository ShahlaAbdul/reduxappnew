import { configureStore } from '@reduxjs/toolkit'
import CalculatorReducer from './features/calculator/calculatorSlice'


export default configureStore({
  reducer: {
    calculator: CalculatorReducer
  
    
  },
})