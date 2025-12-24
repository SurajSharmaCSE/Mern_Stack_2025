import React,{useState,useEffect} from 'react';


function UseEffect_example_4() {
    const [count,setCount] = useState(0);
    const [text,setText] = useState('');

    useEffect(()=>{
        console.log("useEffect");
        document.title = `Button clicked ${count} times`;
        // side effect wala work
    },[count])
    
    console.log('render')
    return(
        <div>
            <h1>Current Count {count}</h1>
            <button onClick={()=>setCount(count+1)}>+1</button>
            <input type='text' value={text} onChange={(e)=>setText(e.target.value)}></input>
           
        </div>
    )
}
export default UseEffect_example_4;