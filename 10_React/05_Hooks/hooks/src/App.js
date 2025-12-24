// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import UseState_example from './Component/01_useState_example';
// import UseEffect_example1 from './Component/01_useEffect_Example_1.js';
// import UseEffect_example_2 from './Component/02_useEffect_Example_2/index.js';
// import UseEffect_example_3 from './Component/03_useEffect_Example_3.js';
// import UseEffect_example_4 from './Component/04_useEffect_Example_4.js';
import context from './Component/05_Context_API/Context.js';
import Navbar from './Component/05_Context_API/Navbar.js';
import Parent1 from './Component/05_Context_API/Parent1.js';
import Parent2 from './Component/05_Context_API/Parent2.js';
function App() {
  const [theme,setTheme]= useState(false);
  return (
    <context.Provider value={theme}>
      <button onClick={()=>setTheme(!theme)}>Change Theme</button>
      {/* <UseState_example/> */}
      {/* <UseEffect_example1/> */}
      {/* <UseEffect_example_2/> */}
      {/* <UseEffect_example_3/> */}
      {/* <UseEffect_example_4/> */}

      {/* below code for Example of context API */}
      <Navbar/>
      <Parent1/>
      <Parent2/>

    </context.Provider>
  );
}

export default App;
