
import './App.css';
import { Fragment } from 'react';
//import AppHeader from './compondents/AppHeader';
import AppFooter from './compondents/AppFooter';
import Item from './compondents/Item';
import AppHeader from './compondents/AppHeader';
import ItemScan from './compondents/ItemScan';

function App() {
  return (
<Fragment>
  <AppHeader/>
    <ItemScan/>
   <AppFooter/>
  <Item/>
</Fragment>
       
  );
}

export default App;
