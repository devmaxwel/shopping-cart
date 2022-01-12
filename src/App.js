import "./App.css";
import Header from "./components/Layout/Header";
import {Route} from 'react-router-dom'
import HomePage from "./components/Pages/HomePage";
import CartPage from "./components/Pages/CartPage";

function App() {
  return (
    <>
      <Header />

      <div>
         <Route path='/' exact> <HomePage /> </Route>
         <Route path='/cart'> <CartPage /> </Route>
      </div>
    </>
  );
}

export default App;
