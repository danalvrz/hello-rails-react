import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetings/greetingReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((store) => store.greeting.message);

  const handleClick = () => {
    dispatch(fetchGreeting());
  };

  return (
    <div> 
      <h1>{message}</h1>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default Greeting
