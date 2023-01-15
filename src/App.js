import "./styles.css";
import Person1 from './Person1'
import Person2 from './Person2'
import Parent from './Parent'
import Input from './Input'
import {useState} from 'react'
export default function App() {
 const[num1,setNum1]=useState(0)
 const[num2,setNum2]=useState(0)
const handlenum1=(e)=>{
  setNum1(e.target.value);
}
const handlenum2=(e)=>{
  setNum2(e.target.value)
}

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
   <Person1 />
   <Person2 />
 <Input  num1={num1} num2={num2}/>
 <input type='number' value={num1} onChange={handlenum1}  />
 <input type='number' value={num2} onChange={handlenum2} />
<Parent  />

    </div>
  );
}
