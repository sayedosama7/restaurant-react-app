import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App"
import AllAbout from "./Components/Pages/About/AllAbout";
import AllChefs from "./Components/Pages/Chefs/AllChefs";
import AllContact from "./Components/Pages/Contact/AllContact";
import AllMenu from "./Components/Pages/Menu/AllMenu";
import AllTestimonial from "./Components/Pages/Testimonial/AllTestimonial";
import AllServices from "./Components/Pages/Services/AllServices";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "about",
    element: <AllAbout />
  },
  {
    path: "chefs",
    element: <AllChefs />
  },
  {
    path: "contact",
    element: <AllContact />
  },
  {
    path: "services",
    element: <AllServices />
  },
  {
    path: "menu",
    element: <AllMenu />
  },
  {
    path: "testimonials",
    element: <AllTestimonial />
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);