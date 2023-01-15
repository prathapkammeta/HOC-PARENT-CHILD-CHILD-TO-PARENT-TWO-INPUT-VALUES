import {useState} from 'react'
const Input=(props)=>{
const[value,setValue]=useState(0);
const addNum=(v1,v2)=>{
let a=parseInt(v1);
let b=parseInt(v2)
setValue(a+b)

}

  return (
    <div>
      {value}
<button onClick={()=>addNum(props.num1,props.num2)}>Click</button>
    </div>
  )
}
export default Input 