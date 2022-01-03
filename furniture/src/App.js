import './App.css';
import React, {Suspense,lazy} from 'react'
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import Home from './components/Home';
import Register from './components/Register';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';

// const Home = lazy(()=>import('./components/Home'))
// const Register = lazy(()=>import('./components/Register'))
// const Gallery = lazy(()=>import('./components/Gallery'))
// const About = lazy(()=>import('./components/About'))
// const Contact = lazy(()=>import('./components/Contact'))
// const Login = lazy(()=>import('./components/Login'))

function App() {
  return (
    <>
    <ToastContainer style={{top: "70px", right: "5%"}}/>
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading....</div>}>
        <Switch>
          <PublicRoute exact path="/" component={Login}/>
          <PublicRoute exact path='/register' component={Register}/>
          <PrivateRoute exact path='/Home' component={Home}/>
          <PrivateRoute exact path='/gallery' component={Gallery}/>
          <PrivateRoute exact path='/about' component={About}/>
        <PrivateRoute exact path='/contact' component={Contact}/>
      </Switch>
        </Suspense>
      </Router>
    </div>
    </>
  );
}

export default App;
