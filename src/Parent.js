import Child from './Child'
import {useState} from 'react'
const Parent=()=>{
  const[a,setA]=useState("hai")

  return (
    <div>  
      <h1>Parent  {a} </h1>
    <Child c='dfd'  x={a} setX={setA}/>
    </div>
  )

}
export default Parent 