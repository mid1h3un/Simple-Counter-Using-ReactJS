import React, {useState} from "react"
function Lists(props){
    const [count,setCount]=useState(0)
    const Increment=()=>{
        setCount(count+1)
    }
    const Reset=()=>{
        setCount(0)
    }
    const Decrement=()=>{
        if(count==0){
            setCount(0)
        }
        else{setCount(count-1)}
    }
    return(
    <div class="cont1">
        <div class="centered-div">
        <p>{count}</p>
        <button className="In-btn" onClick={Increment}>Increment</button>
        <button className="reset" onClick={Reset}>Reset</button>
        <button className="de-btn" onClick={Decrement}>Decrement</button>
        </div>
    </div>
      
    )
}
export default Lists