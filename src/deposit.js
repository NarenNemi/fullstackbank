import { Card, UserContext } from "./context";
import {useState, useContext } from "react";


 export function Deposit() {
  const [show, setShow]     = useState(true);
  const [status, setStatus] = useState('');  

  return (
    <Card
      bgcolor="success"
      header="Deposit"
      status={status}
      body={show ? 
        <DepositForm setShow={setShow} setStatus={setStatus}/> :
        <DepositMsg setShow={setShow}/>} 
        />
      )



function DepositMsg(props){
  return (<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Deposit again
    </button>
  </>);
} 

function DepositForm(props){
  const [email, setEmail]   = useState('');
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState();
  
  const ctx = useContext(UserContext);  

  function handle(){
    console.log(email,amount);
    const user = ctx.users.find((user) => user.email === email);
    if (!user) {
      props.setStatus('fail!');
      return;      
    }
    user.balance = user.balance + Number(amount);
    console.log(user);
    props.setStatus(`Your balance is: ${user.balance}`);      
    props.setShow(false);
  }
// change code above to use getDocs from firbase and create a function that add the amount to the value in collection


  return(<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
      
    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>Deposit</button>

  </>);
 }
}

