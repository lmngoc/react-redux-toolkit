import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/slice/counterSlice';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    fetchAllUser();
  }, [])

  const fetchAllUser = async () => {
    const res = await axios.get("http://localhost:8080/users/all");
    setListUser(res.data ? res.data : []);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>Hello world with React and Hoi Dan IT!</h1>
        <div>

          <button onClick={() => dispatch(increment())}>Increase</button>
          <button onClick={() => dispatch(decrement())}>Decrease</button>
        </div>
        <div>Count = {count}</div> */}
        <div>
          <table>
            <thead>

              <th>ID</th>
              <th>Email</th>
              <th>Username</th>

            </thead>
            <tbody>
              {listUser && listUser.length > 0 && listUser.map((item, index) => {
                return (
                  <tr key={`table-redux-${index}`}>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.username}</td>
                  </tr>
                )
              })}

            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
