import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import {useAppSelector} from "./app/hooks";
import SignUp from "./containers/signUp/SignUp";
import SignIn from "./containers/signIn/SignIn";
import Bonuses from "./containers/bonuses/Bonuses";
import {useEffect} from "react";
import NonActive from "./containers/nonActives/NonActive";
import './App.css';
import NonActivesList from "./containers/nonActivesList/nonActivesList";
import NeactivkaBySquares from "./containers/neactivkaBySquares/NeactivkaBySquares";

const App = () => {
  const userToken = useAppSelector((state) => state.userState.user);
  const location = useLocation();

  useEffect(() => {
    document.body.style.backgroundColor =
      location.pathname === '/sign-in' || location.pathname === '/sign-up' ? '#29384A' : '#E8E8E8';

    if (document.querySelector('.toolbar')) {
      document.documentElement.style.width = '1440px';
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path='*' element={userToken ? <Navigate to="/bonuses" replace/> : <Navigate to="/sign-in" replace/>}/>
        <Route path='sign-up' element={<SignUp/>}/>
        <Route path='sign-in' element={<SignIn/>}/>
        <Route path='bonuses' element={<Bonuses/>}/>
        <Route path='bonuses-by-all-squares' element={<NeactivkaBySquares/>}/>
        <Route path='bonuses/non-active' element={<NonActive/>}/>
        <Route path='bonuses/non-actives-list' element={<NonActivesList/>}/>
      </Routes>
    </div>
  );
}

export default App;
