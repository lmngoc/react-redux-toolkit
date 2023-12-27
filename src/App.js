import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/slice/counterSlice';

function App() {

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  console.log(count);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and Hoi Dan IT!</h1>
        <div>

          <button onClick={() => dispatch(increment())}>Increase</button>
          <button onClick={() => dispatch(decrement())}>Decrease</button>
        </div>
        <div>Count = {count}</div>

      </header>
    </div>
  );
}

export default App;