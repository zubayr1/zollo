import './App.css';
import Signup from './components/Signup_Folder/Signup';
import { AuthProvider } from './context/AuthContext';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard_Folder/Dashboard';
import Login from './components/Login_Folder/Login';
import ForgotPassword from './components/ForgotPassword_Folder/ForgotPassword';

import PrivateRoute from './components/PrivateRouteFolder/PrivateRoute';
import Profile from './components/Profile/Profile';
import Notification from './components/Notification_Folder/Notification';

<<<<<<< HEAD
import Post from './components/Post_Folder/Post'

=======
>>>>>>> f31165dd175da110724d7b29b93d7f6fda9fba8d
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

                <Route path="/notifications" component={Notification} />

<<<<<<< HEAD
                <Route path="/post" component={Post} />

                <Route path="/:profile" component={Profile} />

                
                
=======
                <Route path="/:profile" component={Profile} />

                
>>>>>>> f31165dd175da110724d7b29b93d7f6fda9fba8d
              </Switch>

            </AuthProvider>

          </Router>

        </div>
      
      
    </div>
    
   
  );
}

export default App;
