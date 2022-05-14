import logo from './logoEco.png';
import './App.css';
import Dashboard from './Dashboard';

function App() {
  return (
   <>
   <div className='logo'>
<img src={logo} width='120' alt='Ecodev'/>
   </div>
      <Dashboard/>
      </>
  );
}

export default App;
