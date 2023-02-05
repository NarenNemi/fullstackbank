import { useContext } from "react";
import { Card, UserContext } from "./context";


 function UserData(){
 const {users} = useContext(UserContext);
 console.log(users)
 const userArray = users.map((user) => {
return (<div>
  <p> name: {user.name}</p>
  <p>email: {user.email}</p>
  <p>password: {user.password}</p>
  <p>balance: {user.balance}</p>
 <hr/>
</div>) 
})
 return userArray;
}


export function AllData(){
  const ctx = useContext(UserContext);
  UserData()
  return (
    <Card
      txtcolor="white"
      bgcolor ='info'
      header="User Data"
      body={UserData()}
    />
  );  
}











//function AllData(){
 // const ctx = React.useContext(UserContext);
 // return (
  //  <>
  //  <h5>All Data in Store</h5>
   // {JSON.stringify(ctx)}<br/>
   // </>
 // );
//}
