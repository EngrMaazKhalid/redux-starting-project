import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterAction } from '../store';
const Counter = () => {

  const dispatch = useDispatch();

 const counter =  useSelector(state => state.counter.counter)// allow us to select automatically a part from our state managed by the store 
const show = useSelector(state => state.counter.showCounter)
  const incrementHandler = ()=>{
    dispatch(counterAction.Increment()
      // {type : 'Increment'}
      )
  };
  const increaseHandler = ()=>{
    dispatch( counterAction.IncreaseBy(5)
      // {type : 'IncreaseBy', Amount : 5}
      )
  };

  const decrementHandler = ()=>{
    dispatch( counterAction.decrement()
      // {type : 'decrement'}
      )
  };

  const toggleCounterHandler = () => {
    dispatch( counterAction.toggle()
      // { type : 'toggle'}
      )
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
