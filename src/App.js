import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Root, ErrorPage, Detail } from "./routes/index";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "product/:productId",
        element: <Detail />
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
