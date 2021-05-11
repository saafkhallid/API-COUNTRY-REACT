
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Capital from './components/page/Capitalpage'
import Codes from './components/page/Codespage'
import Langues from './components/page/Languespage'
import Pays from './components/page/Payepage'
import Navbar from './components/Navbar/Navbar'
import ShowCoun from './components/page/ShowCounpage';


const App=()=> {
  return (
    <Router>
      <>
        <Navbar/>

        <Switch>

          <Route exact path="/capital" component={Capital}/>
          <Route  path="/codes" component={Codes}/>
          <Route  path="/langues" component={Langues} />
          <Route  path="/paysN" component={Pays} />
          <Route  path="/ShowCounpage" component={ShowCoun} />
          
         

        </Switch>
       
      </>
    </Router>
  )
}

export default App
