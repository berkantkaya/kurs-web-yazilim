import React from 'react';
import logo from './logo.svg';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Main from './pages/Main'
import Footer from './components/Footer';
import Detail from './components/Detail';
import Cart from './components/Cart';
import Documation from './components/Documation';
import Hakkimda from './components/Hakkimda';
import Demokomut from './components/Demokomut';
import Modal from './components/Modal';
import Default from './components/Default';


function App() {
  return (
    <React.Fragment>
      <Route  path="/" component={Navbar}/>
      <Switch>
     <Route exact path="/" component={Main}/>
      <Route path="/detail" component={Detail}/>
      <Route path="/cart" component={Cart}/>
      <Route path="/hakkimda" component={Hakkimda}/>
      <Route path="/documation" component={Documation}/>
      <Route path="/demokomut" component={Demokomut}/>
      <Route  component={Default}/>
         </Switch>
       <Route path="/" component={Footer}/>
       <Route path="/" component={Modal}/>
    </React.Fragment>
  );
}

export default App;
