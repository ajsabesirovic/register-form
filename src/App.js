import React, { useState } from "react";
import AddUser from "./components/USERS/AddUser";
import UserList from "./components/USERS/UserList";
const App = () => {
  const [usersList,setUsersList] = useState([])
  const addUserHandler = (uName,uAge) => {
    setUsersList((prevState)=> {
      return [
      ...prevState, {name: uName, age:uAge, id: Math.random().toString()}
      ]})
  }
  return(
    <React.Fragment>
    <AddUser onAdd={addUserHandler}/>
    <UserList users={usersList}/>
    </React.Fragment>
  )
};

export default App;