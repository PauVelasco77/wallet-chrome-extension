import React from "react";
import ReactDOM from "react-dom/client";
import {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createMemoryRouter(
  createRoutesFromElements(
    <>
      <Route path='/' lazy={async () => import("./pages/dashboard")} />
      <Route path='/login' lazy={async () => import("./pages/login")} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
