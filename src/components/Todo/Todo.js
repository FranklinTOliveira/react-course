import React from "react";
import styled from "styled-components"; // library needed to use styled components

import "./Todo.css"; // importing a regular css file

import styles from "../Buttons/Button.module.css"; // importing a css module

// Components
import TodoList from "./TodoList";

// styled component
const Heading1 = styled.h1`
  color: white;
  font-size: 48px;
`;

// styled component
const MyButton = styled.button`
  color: green;
  background-color: lightblue;
  font-size: 40px;
  padding: 20px;
`;

// style object
const buttonStyleObject = {
  backgroundColor: "blue",
  border: "3px solid orange",
  color: "#fff",
  padding: "10px",
  fontSize: "20px",
};

function Todo() {
  return (
    <div className="Todo">
      <Heading1>TODO</Heading1>

      <form>
        <input type="text" placeholder="Task" />
        {/* will not work */}
        {/* <button style="background-color: blue;">Add</button> */}
        <MyButton>Add (styled component)</MyButton>
        <button style={buttonStyleObject}>Add (inline style)</button>
        <button className={styles.buttonViolet}>Add (css module)</button>
      </form>

      <TodoList />
    </div>
  );
}

export default Todo;
