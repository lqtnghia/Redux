import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/counterActions";

const Counter: React.FC = () => {
  // Dùng any để đơn giản hóa
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </div>
  );
};

export default Counter;
