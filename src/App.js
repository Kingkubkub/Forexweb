
import './App.css';
import Index from './Page/Index';

import Home from './Page/Home';
import Setting from './Page/Setting';
import Forex from './Page/Forex';
import { BrowserRouter, Route, Router, HashRouter,Switch } from 'react-router-dom'
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Forgotpssword from './Page/Forgotpssword';

function App() {


  return (


    
      <Switch>
        <Route exact path='/Forexweb/' component={Index} />
        <Route path='/Forexweb/home' component={Home} />
        <Route path='/Forexweb/setting' component={Setting} />
        <Route path='/Forexweb/forex' component={Forex} />
        <Route path='/Forexweb/Forgotpssword' component={Forgotpssword} />
      </Switch>
   

  );
}

export default App;
