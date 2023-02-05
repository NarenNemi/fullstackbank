import { Link } from "react-router-dom";

 export function DisplayNavbar() { 
if (window.localStorage.uid !== null) {
  return NavBar;
}else{
  return disNavBar
}
}



export function NavBar(){

  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <Link className="navbar-brand" to="/">BadBank</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/createAccount">Create Account</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/deposit">Deposit</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/withdraw">Withdraw</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/alldata">AllData</Link>
          </li>          
        </ul>
      </div>
      </div>
    </nav>
  );
  }
  
  export function disNavBar(){
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <Link className="navbar-brand" to="/">BadBank</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/createAccount">Create Account</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="#">Please Login</Link>
          </li>          
        </ul>
      </div>
      </div>
    </nav>
  ); 
  }
