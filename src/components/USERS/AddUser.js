import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [invalid,setInvalid] = useState(1)
  const [data, setData] = useState({
    username: "",
    age: "",
  });

   const changeHandler = (e) => {
    e.preventDefault();
    setData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if(data.username.trim().length === 0 || data.age.trim().length === 0){
      setInvalid(2)
      return;

    }
    if(+data.age < 1){
      setInvalid(3)
      return;    }
    
    props.onAdd(data.username,data.age)
    setData({
      username: "",
      age: "",
    });
  };

  const errorHandler = () => {
    setInvalid(1)
  }

  return (
    <div>
       
    {invalid===2 && <ErrorModal onConfirm={errorHandler} title='An error ocured!' message='you must fill the whole form'/>}
    {invalid===3 && <ErrorModal onConfirm={errorHandler} title='Invalid age' message='The age must be over 0'/>}
 
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          onChange={(e) => changeHandler(e)}
          value={data.username}
          name="username"
          id="username"
          type="text"
        />
        <label htmlFor="age">Age</label>
        <input
          onChange={(e) => changeHandler(e)}
          value={data.age}
          id="age"
          name="age"
          type="number"
        />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
      </div>
      );
};
export default AddUser;
