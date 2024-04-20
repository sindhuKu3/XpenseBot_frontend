
import'../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import Profile from './Components/Profile/Profile';

import Homepage from './Components/Homepage/Homepage';

import SignIn from './Components/UserRegistration/SignIn';
import SignUp from './Components/UserRegistration/SignUp';
import { useGlobalContext } from './Context/globalContext';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './Components/Navbar/Navbar';



function App() {
  const global = useGlobalContext(); 
 
  console.log(global) ; 
  return (
    <div className="App">
 

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          {/* <Route path="/logout" element={<LogOut/>}/> */}
          <Route path="/profile" element={<Profile />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
