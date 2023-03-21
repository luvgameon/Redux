import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {
  const counter=useSelector((state)=>state.counter);
  const dispatch=useDispatch();
  const toggleCounterHandler = () => {};

  const increaseHandler=()=>{
    dispatch({type:'increment'})
  }
  const descreaseHandler=()=>{
    dispatch({type:'decrement'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={increaseHandler}>+ by 5</button>
      <br />
      <br />
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <br />
      <br />
     
      <button onClick={descreaseHandler}>- by 5</button>
    </main>
  );
};

export default Counter;
