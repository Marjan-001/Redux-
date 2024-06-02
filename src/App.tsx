import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";

function App() {
const count = useSelector(state=>state.counter.count)
const dispatch = useDispatch()
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
    <div className="flex gap-6 items-center border border-purple-900 p-7 ">
      <button onClick={()=>dispatch(increment())} className="px-6 py-3 bg-green-500 rounded-lg">
        increment
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
