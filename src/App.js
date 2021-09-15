import './App.css';
import Signup from './components/Signup_Folder/Signup';
import { AuthProvider } from './context/AuthContext';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard_Folder/Dashboard';
import Login from './components/Login_Folder/Login';
import ForgotPassword from './components/ForgotPassword_Folder/ForgotPassword';

import PrivateRoute from './components/PrivateRouteFolder/PrivateRoute';

function App() {
  return (

    <div className="App" >

      <>
      <br/>
      </>

      <div >

          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard}/>

                <Route path="/signup" component={Signup} />

                <Route path="/login" component={Login} />

                <Route path="/forgot-password" component={ForgotPassword} />


              </Switch>

            </AuthProvider>

          </Router>

        </div>
      
      
    </div>
    
   
  );
}

export default App;
