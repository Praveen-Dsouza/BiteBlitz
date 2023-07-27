import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/restaurant/restaurantList/Home";
import Support from "./components/Support";
import Offers from "./components/Offers";
import Checkout from "./components/Checkout";
import PageNotFound from "./components/PageNotFound";
import RestaurantMenu from "./components/restaurant/restaurantMenu/RestaurantMenu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Glitch from "./components/Glitch";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "offers-near-me",
        element: <Offers />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
      {
        path: "*",
        errorElement: <Glitch />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="">
      <React.StrictMode>
        <RouterProvider router={appRouter} />
      </React.StrictMode>
    </div>
  );
}

export default App;
