import { useState, useContext, useRef } from "react";
import { Card, UserContext } from "./context";
import { auth, db } from "./firebase-confing";
import {  signOut, signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore"; 
import { async } from "@firebase/util";


export function Login(){
  const [show, setShow]     = useState(true);
  const [status, setStatus] = useState('');    
  const [user, setUser]     = useState('');

  // const [loggedIn, setLoggedIn] = useState();
  // useref value for the navbar
  let isLoggedin = useRef(false)

  const retrieveUser = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
 }
/*
   useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
}, [])
*/
  return (
    <Card
      bgcolor="primary"
      header="Login"
      status={status}
      body={show ? 
        <LoginForm setShow={setShow} setStatus={setStatus}/> :
        <LoginMsg setShow={setShow} setStatus={setStatus}/>}
    />
  ) 
//logout card
function LoginMsg(props){
//firebase logout logic
  const logout = async () => {
    signOut(auth);
    isLoggedin = false;
    console.log(isLoggedin)
    setShow(true)
    console.log('signed out')
  }
//logout form
  return(<>
    <h5>Success</h5>
    <button className="btn btn-light"
    onClick={logout}>
      Logout
    </button>
  </>);
}

function LoginForm(props){
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  
//const ctx = useContext(UserContext) ; 

function handle(){ 
  props.setStatus('')
  isLoggedin = true
  console.log(isLoggedin)
  retrieveUser()
  setShow(false);
  //console.log(user)
  //console.log(user.email, user.password)
  }

//firebase signIn function 
//i would like to add error handling
const firelogin = async () => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log(userCredential);
    handle();
  })
  .catch((error) => {
    console.log(error);
    setStatus('invalid user')
  })
};

//
  //login form
  return (<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input type="password" 
      className="form-control" 
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>
    <button type="submit" className="btn btn-light" onClick={firelogin}>Login</button>
  </>);
    }
  };

/* old firebase login logic
  const firelogin = async () => {
    try {
      const signIn = await signInWithEmailAndPassword(auth, email, password);
      console.log(signIn);
      console.log(signIn.user)
      //setAuthUser(signIn.user)
      console.log(authUser)
    } catch (error) {
      console.log(error.message);
    }
  }
*/





  /*
  //old validation login button logic
    function handle(){
      //const user = ctx.users.find((user) => user.email === email);
      console.log(authUser.uid);
      console.log(email, password);
      if (user.email !== email) {
        console.log('wrong username')
        props.setStatus('incorrect user')      
        return setShow(true);      
      }
      if (user.password !== password) {    
        console.log('wrong password')
        props.setStatus('incorrect password');
        setShow(true)
      }else{
      props.setStatus('')
      console.log(user)
      console.log(user.email, user.password)
      firelogin(user)
      isLoggedin = true
      console.log(isLoggedin)
      retrieveUser()
      return setShow(false);
     }
  }
  */
