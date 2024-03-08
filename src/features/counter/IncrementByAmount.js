import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementByAmount } from './counterSlice'
import TextField from '@mui/material/TextField';



//import styles from './Counter.module.css'
export default function IncrementByAmount() {
    const count = useSelector((state) => state.counter.value)
    const [amount, newAmount] = useState(0);

    const dispatch = useDispatch()
    return (
    <div>
        {count}
        <TextField
          defaultValue={amount}
          onChange={(event)=>newAmount(event.target.value)}
          variant="filled"
        />
        <div>
            <button
            aria-label="Increment value"
            onClick={() => dispatch(incrementByAmount(count, amount))}
            >

                Increment
            </button>
        </div>
    </div>
)}