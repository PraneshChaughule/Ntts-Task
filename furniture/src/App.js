import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/registration' element={<Register/>}/>
          <Route path='/gallery' element={<Register/>}/>
          <Route path='/about' element={<Login/>}/>
          <Route path='/contact' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
