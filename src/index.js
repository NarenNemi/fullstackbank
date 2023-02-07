import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from "./home";
import { CreateAccount } from "./createaccount";
import { Login } from "./login"
import { Deposit } from "./deposit";
import { Withdraw } from "./withdraw"
import { Balance } from "./balance";
import { AllData } from "./alldata";
import { NavBar } from "./navbar";
import { UserContext } from './context';
import { React } from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css'


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
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'marilena',email:'testz@gmail.com',password:'secret',balance:100}]}}>
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
            </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Spa/>);
