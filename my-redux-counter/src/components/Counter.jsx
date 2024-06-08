import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, increase, toggle } from '../features/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const toggled = useSelector((state) => state.counter.toggled);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increase(5))}>Increase by 5</button>
      <button onClick={() => dispatch(toggle())}>
        {toggled ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default Counter;
