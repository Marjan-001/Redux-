import { decrement, increment, incrementByValue } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
const count = useAppSelector(state=>state.counter.count)
const dispatch = useAppDispatch()
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
    <div className="flex gap-6 items-center border border-purple-900 p-7 ">
      <button onClick={()=>dispatch(increment())} className="px-6 py-3 bg-green-500 rounded-lg">
        increment
      </button>
      <button onClick={()=>dispatch(incrementByValue(5))} className="px-6 py-3 bg-green-500 rounded-lg">
        increment by 5
      </button>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(decrement())}  className="px-6 py-3 bg-red-500 rounded-lg">
        decrement
      </button>
    </div>
    </div>
  );
}

export default App;
