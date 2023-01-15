import UpdateComp from './Hoc'
function  Person2({handleAdd,add}){

  return (
    <div>
      {add}
   <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default UpdateComp(Person2)