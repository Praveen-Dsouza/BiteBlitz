import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Support from "./components/Support";
import Offers from "./components/Offers";
import Checkout from "./components/Checkout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/offers-near-me",
    element: <Offers/>
  },
  {
    path: "/support",
    element: <Support/>
  },
  {
    path: "/checkout",
    element: <Checkout/>
  }
]);

function App() {
  return (
    <div className="">
      <React.StrictMode>
        <Navbar/>
        <RouterProvider router={appRouter} />
      </React.StrictMode>
    </div>
  );
}

export default App;
