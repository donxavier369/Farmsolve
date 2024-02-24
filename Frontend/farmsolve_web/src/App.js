import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from './Components/Base/Layout/Layout';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer position='top-right' autoClose={3000}/>
      
      <Layout/>
    </div>
  );
}

export default App;

