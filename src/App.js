import Input from "./input";
import AllTodos from "./AllTodos";
import { useState } from "react";

function App() {
  const [appLevelState, setAppLevelState] = useState([])
  const redButtonFunc = (str) => {
    setAppLevelState([str,...appLevelState])
  }
  return (
    <div>
      <h2>working</h2>
    <Input redButtonFunc = {redButtonFunc}/>
    <AllTodos appLevelState = {appLevelState}/>
    </div>
  );
}

export default App;
