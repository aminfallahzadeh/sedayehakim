// react imports
import React from "react";
import ReactDOM from "react-dom/client";

// rrd imports
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

// components
import App from "./App.tsx";

// styles imports
import "./assets/styles/main.scss";

// screens
import Error from "./screens/Error.tsx";
import Home from "./screens/Home.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/sedayehakim/" element={<App />}>
        <Route index path="/sedayehakim/" element={<Home />} />
      </Route>
      <Route path="*" element={<Error />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
