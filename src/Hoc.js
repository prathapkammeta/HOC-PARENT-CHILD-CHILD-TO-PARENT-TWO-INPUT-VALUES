import {useState} from 'react'
function UpdateComp(Origc){

  function NewComp(){
    const[count,setCount]=useState(1);
    const[add,setAdd]=useState(0);
    const handleInc=()=>{
    setCount(count*2)
    }
    const handleAdd=()=>{
      setAdd(add+2)
      }
    return <Origc handleAdd={handleAdd} add={add}  handleInc={handleInc} count={count}/>

  }
  return NewComp
}
export default UpdateComp