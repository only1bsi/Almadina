import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './icecreamSlice';

export const IcecreamView = () => {
  const [value, setValue] = React.useState('');
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream);
  const dispatch1 = useDispatch();

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <h2>Number Of icecreams - {numOfIcecream}</h2>
      <button onClick={() => dispatch1(ordered())}>Order icecreams</button>
      <input type='number' value={value} onChange={handleInputChange} />
      <button onClick={() => dispatch1(restocked(parseInt(value || 0)))}>
        Restock icecreams
      </button>
    </div>
  );
};