import React from "react";
import { 
  createBrowserRouter,
  RouterProvider
 } from "react-router-dom";

import { Root, ErrorPage, Detail, Home } from "./routes/index";


 const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "product/:productId",
        element: <Detail />
      },
      {
        path: "home",
        element: <Home />
      }
    ]
  }
 ])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
