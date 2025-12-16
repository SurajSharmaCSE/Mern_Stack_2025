import React,{useState,useEffect} from 'react';


function UseEffect_example() {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("useEffect");
        document.title = `Button clicked ${count} times`;
        // side effect wala work
    })
    
    console.log('render')
    return(
        <div>
            <h1>Current Count {count}</h1>
            <button onClick={()=>setCount(count+1)}>+1</button>
           
        </div>
    )
}
export default UseEffect_example