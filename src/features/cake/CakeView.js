import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {ordered, restocked} from './cakeSlice'

export const CakeView = (state) => {
  const numOfCakes = useSelector((state) => state.cake.numOfCake)
  const dispatch = useDispatch()
  return (
    <div>
        <h2>Number Of Cakes - {numOfCakes}</h2>
        <button onClick={() => dispatch(ordered())}>Order Cake</button>
        <button onClick={() => dispatch(restocked(3))}>Restock Cakes</button>
    </div>
  )
}
