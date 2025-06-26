import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store";
import { decrement, increment, incrementByAmount } from "./slice/counterSlice";

function App() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Hello World</h2>
      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Increment by 5
        </button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          Increment by 10
        </button>
        <button onClick={() => dispatch(incrementByAmount(15))}>
          Increment by 15
        </button>
        <button onClick={() => dispatch(incrementByAmount(20))}>
          Increment by 20
        </button>
        <button onClick={() => dispatch(incrementByAmount(25))}>
          Increment by 25
        </button>
        <button onClick={() => dispatch(incrementByAmount(30))}>
          Increment by 30
        </button>
        <button onClick={() => dispatch(incrementByAmount(35))}>
          Increment by 35
        </button>
        <button onClick={() => dispatch(incrementByAmount(40))}>
          Increment by 40
        </button>
        <button onClick={() => dispatch(incrementByAmount(45))}>
          Increment by 45
        </button>
        <button onClick={() => dispatch(incrementByAmount(50))}>
          Increment by 50
        </button>
      </div>
    </>
  );
}

export default App;
