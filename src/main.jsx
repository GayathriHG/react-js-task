import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./main.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AboutPage from "./pages/AboutPage.jsx";
import GuestLayout from "./layouts/Guest.jsx";
import HomePage from "./pages/HomePage.jsx";
import RecipePage from "./pages/RecipePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import RecipeOnePage from "./pages/one.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/recipes",
        element: <RecipePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/recipeone",
        element: <RecipeOnePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
