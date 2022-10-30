import React, {useState, createContext} from "react";
import { MyContext } from "./App";

export const OtherApp2nd = () => {
  const [name, setName] = useState("jiwon");
  const [age, setAge] = useState(28);
  return (
    <div>
      <MyContext.Provider value={{name, age}}>
        <MyContext.Consumer>
          {({age}) => <>{age}</>}
        </MyContext.Consumer>
      </MyContext.Provider>
    </div>
  )

}