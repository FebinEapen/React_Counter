import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
   <div style={{height:"100vh"}} className='d-flex align-items-cenyer justify-content-center w-100 flex-column'>
    <div className='d-flex align-items-center justify-content-center flex-column p-5 rounded' style={{backgroundColor:"white"}}>
    <Counter/>
    </div>
   </div>
  );
}

export default App;
