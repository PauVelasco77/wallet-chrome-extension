import React from "react";
import ReactDOM from "react-dom/client";
import {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import * as LayoutModule from "./pages/layout";
import * as LoginModule from "./pages/login";

const router = createMemoryRouter(
  createRoutesFromElements(
    <Route
      path='/'
      id='root'
      element={<LayoutModule.default />}
      loader={LayoutModule.loader}
      errorElement={<div>Error page</div>}>
      <Route index element={<div>Dashboard page</div>} />
      <Route
        path='login'
        element={<LoginModule.default />}
        loader={LoginModule.loader}
        errorElement={<div>Error page</div>}
      />
    </Route>
  ),
  {
    initialEntries: ["/"],
    initialIndex: 0,
  }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
