import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CardPage from "./pages/CardPage.jsx";
import ButtonPage from "./pages/ButtonPage.jsx";
import AlertPage from "./pages/AlertPage.jsx";
import FormPage from "./pages/FormPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/card",
        element: <CardPage />,
      },
      {
        path: "/button",
        element: <ButtonPage />,
      },
      {
        path: "/alert",
        element: <AlertPage />,
      },
      {
        path: "/form",
        element: <FormPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
