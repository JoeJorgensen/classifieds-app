import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='border' style={{fontSize:'20px'}}>
      <h1>Classifieds</h1>
      <nav className='border'>
          
      {/* <Link to='/'>Home</Link> - {''} */}
      
      <Link to='/catagories'>Catagories</Link> - {''}
      <Link to= '/jobs'>Jobs</Link> - {''}
      <Link to= '/home'>Home</Link> - {''}
      <Link to='/about'>About</Link> 
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
