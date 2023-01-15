import UpdateComp from "./Hoc"
function Person1({handleInc,count}){

  return (
    <div>
      {count}
      <button onClick={handleInc}>Click</button>
    </div>
  )
}
export default UpdateComp(Person1)