import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementbyAmount, reset } from '../Redux/counterSlice'

function Counter() {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counterSlice.count)
    const [amount, setAmount] = useState(0)
    const handleIncrement=()=>{
        if (amount>0){
        dispatch(incrementbyAmount(+amount))
        setAmount(0)
        }
        else{
            alert("enter valid amount")
        }
    }
    return (

        <div style={{ width: '600px' }} className='border rounded p-3 d-flex justify-content-center align-items-center flex-column'>
            <h1>Counter</h1>
            <h1 style={{ fontSize: '200px' }}>{count}</h1>
            <div className='d-flex mx- justify-content-between w-100'>
                <button onClick={() => dispatch(decrement())} className='btn btn-warning'>Decrement</button>
                <button onClick={() => dispatch(reset())} className='btn btn-danger'>Reset</button>
                <button onClick={() => dispatch(increment())} className='btn btn-success'>Increment</button>
            </div>
            <div className='d-flex justify-content-between mt-5 w-100'>
                <input onChange={(e)=>setAmount(e.target.value)} value={amount||""} type="text" className='form-control ' placeholder='enter the amount to be incremented' />
                <button onClick={handleIncrement} className='btn btn-primary ms-3'>Increment by amount</button>
            </div>
        </div>
    )
}

export default Counter