import { React } from "react";
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Home } from "./home";
import { CreateAccount } from "./createaccount";
import { Login } from "./login"
import { Deposit } from "./deposit";
import { Withdraw } from "./withdraw"
import { Balance } from "./balance";
import { AllData } from "./alldata";
import { NavBar } from "./navbar";
import { UserContext } from "./context";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap" 



function Spa() {
  return (
    <HashRouter>
      <div>
        <NavBar/>        
        <UserContext.Provider value={{users:[{name:'matty',email:'test.test@gmail.com',password:'secret',balance:100}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/balance/" component={Balance} />
            <Route path="/alldata/" component={AllData} />
          </Routes>
          </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Spa/>);
