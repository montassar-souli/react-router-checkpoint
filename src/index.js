import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleMovie from "./components/pages/SingleMovie";
import NotFoundPage from "./components/pages/NotFoundPage";
import AddMovie from "./components/pages/AddMovie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "addMovie",
    element: <AddMovie />,
  },
  {
    path: "/movie/:id",
    element: <SingleMovie />,
  },
  {
    path: "/addmovie",
    element: <AddMovie />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
