
import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from "./home";
import { CreateAccount } from "./createaccount";
import { Login } from "./login"
import { Deposit } from "./deposit";
import { Withdraw } from "./withdraw"
import { Balance } from "./balance";
import { AllData } from "./alldata";
import { NavBar, DisplayNavbar } from "./navbar";
import { UserContext, LoginContext } from "./context";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap" 

/*
  const ctx = useContext(UserContext); 
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const DisplayNavbar = () => {
      if(isAuthenticated){
        return {enablednav}
      } else {
return {disablednav}>
   }
  }
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        ctx.setUser(currentUser);
        if(currentUser){
          setIsAuthenticated(true);
        }
    });
}, []) 
*/

function Spa() {

  return (
    <BrowserRouter>
      <div>
      <DisplayNavbar>
          <div className="container" style={{padding: "20px"}}>
          <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/CreateAccount" element={<CreateAccount/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/deposit" element={<Deposit/>} />
            <Route path="/withdraw" element={<Withdraw/>} />
            <Route path="/balance" element={<Balance/>} />
            <Route path="/alldata" element={<AllData/>} />
            </Routes>
          </div>
          </DisplayNavbar>
      </div>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Spa/>);


// ={<CreateAccount isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>}