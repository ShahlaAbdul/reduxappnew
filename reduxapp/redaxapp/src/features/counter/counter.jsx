// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment, incrementByAmount } from './counterSlice'
// import  './counter.scss'


// export function Counter() {
//   const count = useSelector((state) => state.counter.value)
//   const dispatch = useDispatch()

//   return (
//     <div>
//       <div className='counterContainer'>
//         {/* <div className='counter'>
//          <div className="counterInput">
//           <input type="text" placeholder='...'/>
//          </div>
//          <div className='counterNumbers'>
//           <span>1</span>
//           <span>2</span>
//           <span>3</span>
//           <span>4</span>
//           <span>5</span>
//           <span>6</span>
//           <span>7</span>
//           <span>8</span>
//           <span>9</span>
//           <span>+</span>
//           <span>-</span>
//           <span>*</span>
//           <span>/</span>
//           <span>result</span>
//          </div>
//         </div> */}
//         <div className="calculator">
//           <div className='calculatorInput'>
//             <input type="number" placeholder='enter a number1' />
//             <input type="number"  placeholder='enter a number 2'/>
//             <input type="text" placeholder='enter a calculate'/>
//           </div>
//           <div className="calculatorHesab">
//             <span>+</span>
//             <span>-</span>
//             <span>*</span>
//             <span>/</span>
//             <span>result:</span>
//           </div>
//         </div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(incrementByAmount(4))}
//         >
//           Increment
//         </button>
//         <span>{count}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//       </div>
//     </div>
//   )
// }