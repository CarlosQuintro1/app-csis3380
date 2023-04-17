import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Learn from './components/Learn'
import About from './components/About'
import Transactions from './components/Transactions'
import UserInfo from './components/UserInfo'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Invest from './components/Invest'
import PrivateRoutes from './PrivateRoute';
import {useIsAuthenticated} from 'react-auth-kit';


function App() {

  const isAuthenticated = useIsAuthenticated()
    let val;
    if(isAuthenticated()){
    val = true
    }else if(!isAuthenticated()){
    val = false
    }

  return (
    <>
    <Routes>
    {/* <Navbar /> */}

      {/* <div className="container"> */}
        <Route path="/" exact element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/About" element={<About />} />
        <Route path="/Invest" element={<Invest/>} />


        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/Login" element={<Login />} />
        <Route element={<PrivateRoutes auth={{ token: val }}/>}>
              <Route path="/account" element={<UserInfo/>} /></Route>
        <Route element={<PrivateRoutes auth={{ token: val }}/>}>
              <Route path="/transactions" element={<Transactions/>} /></Route>
        {/* <RequireAuth loginPath={"/login"}>  </RequireAuth>} /> */}
      </Routes>
    </>
  );
}

export default App;
