// import logo from './logo.svg';
import './App.css';
import Fireauth from './Component/Fireauth';
import FirebaseDB from './Component/FirebaseDB';
import Firestorage from './Component/FireStorage';

function App() {
  return (
    <>
      <Fireauth/>
      <Firestorage/>
      {/* <FirebaseDB/> */}
    </>
  );
}

export default App;
