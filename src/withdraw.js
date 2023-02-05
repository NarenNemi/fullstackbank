import { useState,  useContext } from "react";
import { Card, UserContext } from "./context";

export function Withdraw(){
  const [show, setShow]     = useState(true);
  const [status, setStatus] = useState('');  
  

  return (
    <Card
      bgcolor="success"
      header="Withdraw"
      status={status}
      body={show ? 
        <WithdrawForm setShow={setShow} setStatus={setStatus}/> :
        <WithdrawMsg setShow={setShow}/>}
    />
  )


function WithdrawMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Withdraw again
    </button>
  </>);
}

function WithdrawForm(props){
  const [email, setEmail]   = useState('');
  const [amount, setAmount] = useState('');
  const [balance, setBalance]   = useState();
  const ctx = useContext(UserContext);  

  function handle(){
    console.log(email,amount);
    const user = ctx.users.find((user) => user.email === email);
    if (!user) {
      props.setStatus('fail!')      
      return;      
    }
  if(amount > user.balance) {
   props.setStatus('overdraft detected');
   props.setShow(true);
   return;
  }
    user.balance = user.balance - Number(amount);
    console.log(user);
    props.setStatus(`Your balance is: ${user.balance}`);      
    props.setShow(false);
  }

  return(<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} 
      onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
        Withdraw
    </button>

  </>);
 }
}
