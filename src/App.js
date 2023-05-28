import './App.css';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber } from './action/index';

function App() {
  const myState=useSelector((state)=>state.reducer);
  const dispatch=useDispatch();
  return (
    <div className="App">
      <h1>Increament / Decreament counter</h1>
      <h4>Using redux</h4>

      <div className='container'>
       
        <a className='quantity-minus' title='Decreament' onClick={()=>dispatch(decNumber())}><span>-</span></a>
        
        <h1 >{myState}</h1>
        <a className='quantity-plus' title='Increament' onClick={()=>dispatch(incNumber())}>
          <span>+</span>
        </a>
        
      </div>

    </div>
  );
}

export default App;
