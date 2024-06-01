function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
    <div className="flex gap-6 items-center border border-purple-900 p-7 ">
      <button className="px-6 py-3 bg-green-500 rounded-lg">
        increment
      </button>
      <h1>0</h1>
      <button className="px-6 py-3 bg-red-500 rounded-lg">
        decrement
      </button>
    </div>
    </div>
  );
}

export default App;
