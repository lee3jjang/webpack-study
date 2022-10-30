import React, { useState, createContext } from "react";
import styles from "./App.css";
import { OtherApp } from "./other-app";
import { OtherApp2nd } from "./other-app-2nd";


export const MyContext = createContext({name: "", age: 0});


export const App = () => {
  const [name, setName] = useState("sangjin");
  const [age, setAge] = useState(33);
  return (
    <>
      <MyContext.Provider value={{name, age}}>
        <OtherApp />
        <MyContext.Consumer>
          {({age}) => <>{age}</>}
        </MyContext.Consumer>
      </MyContext.Provider>
      <OtherApp2nd />
    </>
  )
};