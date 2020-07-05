import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Laptop from './components/Laptop';
import AccessLists from './components/AccessLists';
import Invalid from './components/Invalid';
import Terms from './components/Terms';
import Slide from './Slide';





function App() {
 
  return (
   <React.Fragment>
   <Navbar></Navbar>
  <Slide></Slide>
   <Switch>
   <Route exact path="/" component={ProductList} />
   <Route path="/details" component={Details} />
   <Route path="/accesslists" component={AccessLists} />
   <Route path="/cart" component={Cart} />   
   <Route  path="/default" component={Default} />
   <Route  path="/laptop" component={Laptop} />
   <Route  path="/terms" component={Terms} />
   <Route component={Invalid} />
   
    </Switch>   
    <Modal></Modal>
    
        </React.Fragment>
  );
}

export default App;
