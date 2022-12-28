
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home/Home';
import Login from './Component/Login/Login/Login';
import SignUp from './Component/Login/SignUp/SignUp'
import BreakfastMenu from './Component/Meals/Breakfast/BreakfastMenu';
import LunchMenu from './Component/Meals/Lunch/LunchMenu';
import DinnerMeal from './Component/Meals/Dinner/DinnerMeal';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/breakfast' element={<BreakfastMenu></BreakfastMenu>}></Route>
        <Route path='/lunch' element={<LunchMenu></LunchMenu>}></Route>
        {/* <Route path='/dinner' element={<Dinner></Dinner>}></Route> */}
        <Route path='/dinner' element={<DinnerMeal></DinnerMeal>}></Route>
      </Routes>
    </div>
  );
}

export default App;
