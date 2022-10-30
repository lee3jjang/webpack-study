import React, { useContext } from "react";
import { MyContext } from "./App";

export const OtherApp = () => {
  const { name } = useContext(MyContext);

  return (
    <div className="my-class">
      <h1>{name}</h1>
    </div>
  )
}