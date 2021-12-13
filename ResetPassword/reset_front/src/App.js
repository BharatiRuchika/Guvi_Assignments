import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./Login";
import Reset from "./Reset";
import NewPassword from './NewPassword';
function App() {
  return (
    
    <BrowserRouter>
      <Route path='/' exact component={Login} />
     
      <Route exact path='/reset' component={Reset} />
     
      <Route exact path='/reset/:token' component={NewPassword} />
    </BrowserRouter>
  );
}

export default App;