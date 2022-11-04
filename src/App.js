import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import AppHeader from './compondents/AppHeader';
import AppFooter from './compondents/AppFooter';
import Item from './compondents/Item';

function App() {
  return (
<Fragment>
  <AppHeader/>

  <AppFooter/>
  <Item/>
</Fragment>
       
  );
}

export default App;
