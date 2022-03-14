import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='border' style={{fontSize:'30px'}}>
      <h1>Classifieds</h1>
      <nav style={{
          border:'2px solid',
          // textAlign:'center'
        }}>
          
      <Link to='/'>Home</Link> - {''}
      <Link to='/about'>About</Link> - {''}
      <Link to='/catagories'>Catagories</Link> - {''}
      <Link to= '/jobs'>Jobs</Link>

      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
