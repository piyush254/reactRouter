import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Component/Home/Home.jsx";
import About from "./Component/About/About.jsx";
import Contact from "./Component/Contect/Contact.jsx";

// const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Layout />,
  //   children: [
  //     {
  //       path: "",
  //       element: <Home />,
  //     },
  //     {
  //       path: "About",
  //       element: <About />,
  //     },
  //     {
  //       path: "Contact",
  //       element: <Contact />,
  //     },
  //   ],
  // },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path="/"  element={<Layout />}>
   <Route path="" element={<Home />}/>      
   <Route path="About" element={<About />}/>      
   <Route path="Contact" element={<Contact />}/>      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
