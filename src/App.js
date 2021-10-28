
import './App.css';
import Index from './Page/Index';

import Home from './Page/Home';
import Setting from './Page/Setting';
import Forex from './Page/Forex';
import { BrowserRouter, Route, Router, HashRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Forgotpssword from './Page/Forgotpssword';

function App() {


  return (


    <div>
      <HashRouter>
        <Route exact path="/" component={Index} />
        <Route path="/home" component={Home} />
        <Route path="/setting" component={Setting} />
        <Route path="/forex" component={Forex} />
        <Route path="/Forgotpssword" component={Forgotpssword} />
      </HashRouter>
    </div>

  );
}

export default App;
