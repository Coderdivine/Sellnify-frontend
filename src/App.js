import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import Home from './Home';
import {Seller_id} from "./Config";


export const HomeContext = createContext(null);
function App() {
  const [ seller_id,setSellers_id ] = useState(Seller_id?Seller_id:"");
  return (
    <div className="App">
      <HomeContext.Provider
        value={{ seller_id,setSellers_id }}
      >
       <Home />
      </HomeContext.Provider>
    </div>
  );
}

export default App;
