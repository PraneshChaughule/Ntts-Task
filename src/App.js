import './App.css';
import React, {Suspense,lazy} from 'react'
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import ErrorBoundry from './components/ErrorBoundry';
// import Home from './components/Home';
// import Register from './components/Register';
// import Gallery from './components/Gallery';
// import About from './components/About';
// import Contact from './components/Contact';
// import Login from './components/Login';

const Home = lazy(()=>import('./components/Home'))
const Register = lazy(()=>import('./components/Register'))
const Gallery = lazy(()=>import('./components/Gallery'))
const About = lazy(()=>import('./components/About'))
const Contact = lazy(()=>import('./components/Contact'))
const Login = lazy(()=>import('./components/Login'))

function App() {
  const token = localStorage.getItem('jwttoken');
  console.log(token)
  return (
    <>
    <ToastContainer style={{top: "70px", right: "5%"}}/>
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading....</div>}>
        <Switch>
          <PrivateRoute exact path='/home' component={Home}/>
          <PrivateRoute exact path='/gallery' component={Gallery}/>
          <PrivateRoute exact path='/about' component={About}/>
          <PrivateRoute exact path='/contact' component={Contact}/>
          <ErrorBoundry>
          <PublicRoute exact path="/" component={Login}/>
          </ErrorBoundry>
          <PublicRoute exact path='/register' component={Register}/>
      </Switch>
        </Suspense>
      </Router>
    </div>
    </>
  );
}

export default App;
