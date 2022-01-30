import './App.css';
import {Switch,Route}  from 'react-router-dom'
import App2 from "./App2"
import LogIn from './LogIn'
import SignUp from './SignUp'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={SignUp} />
      <Route path="/login" component={LogIn} />
      <Route path="/landing" component={App2} />
    </Switch>
  );
}

export default App;
