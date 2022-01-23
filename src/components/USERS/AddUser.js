import React, { useState,useRef } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [invalid,setInvalid] = useState(1)
  // const [data, setData] = useState({
  //   username: "",
  //   age: "",
  // });
  
  const nameRef = useRef();
  const ageRef = useRef();

  //  const changeHandler = (e) => {
  //   e.preventDefault();
  //   setData((prevState) => {
  //     return { ...prevState, [e.target.name]: e.target.value };
  //   });
  // };

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value
    const enteredAge = ageRef.current.value
    if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
      setInvalid(2)
      return;

    }
    if(+enteredAge < 1){
      setInvalid(3)
      return;    }
    
    props.onAdd(enteredName, enteredAge)
    
    // setData({
    //   username: "",
    //   age: "",
    // });
  };

  const errorHandler = () => {
    setInvalid(1)
  }

  return (
    <Wrapper>
       
    {invalid===2 && <ErrorModal onConfirm={errorHandler} title='An error ocured!' message='you must fill the whole form'/>}
    {invalid===3 && <ErrorModal onConfirm={errorHandler} title='Invalid age' message='The age must be over 0'/>}
 
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          // onChange={(e) => changeHandler(e)}
          // value={data.username}
          ref={nameRef}
          name="username"
          id="username"
          type="text"
          />
        <label htmlFor="age">Age</label>
        <input
          // onChange={(e) => changeHandler(e)}
          // value={data.age}
          ref={ageRef}
          id="age"
          name="age"
          type="number"
        />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
      </Wrapper>
      );
};
export default AddUser;
