
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home/Home';
import Login from './Component/Login/Login/Login';
import SignUp from './Component/Login/SignUp/SignUp'




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
