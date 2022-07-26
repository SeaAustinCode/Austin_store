import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        <PayPalScriptProvider options={{ "client-id": "test" }}>
          <PayPalButtons style={{ layout: "horizontal" }} />
        </PayPalScriptProvider>
      </div>
    </div>
  );
}

export default App;
