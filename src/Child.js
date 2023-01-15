const Child=(props)=>{

  return (
    <div>
      <h1>Child {props.c}</h1>

      <button onClick={()=>props.setX("bye")}>Click</button>
    </div>
  )
}

export default Child 