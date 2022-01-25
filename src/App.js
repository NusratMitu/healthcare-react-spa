
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import Appointment from './components/Appointment/Appointment';
import About from './components/About/About';
import Services from './components/Services/Services';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import Doctors from './components/Doctors/Doctors';
import Home from './components/Home/Home/Home';

function App() {
  
  return (
    <div className="App">
     <AuthProvider>
     <Router>
       <Switch>
         <Route exact path='/'>
          <Home></Home>
         </Route>
         <Route path='/home'>
          <Home></Home>
         </Route>
         <Route path='/services'>
          <Services></Services>
         </Route>
         <PrivateRoute path='/serviceDetail/:serviceId'>
           <ServiceDetail></ServiceDetail>
         </PrivateRoute>
         <Route path='/doctors'>
           <Doctors></Doctors>
         </Route>
         <PrivateRoute path='/appointment'>
          <Appointment></Appointment>
         </PrivateRoute>
         <Route path='/about'>
          <About></About>
         </Route>
         <Route path='/signup'>
          <Signup></Signup>
         </Route>
         <Route path='/signin'>
          <Signin></Signin>
         </Route>
         <Route path='*'>
          <NotFound></NotFound>
         </Route>
       </Switch>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
