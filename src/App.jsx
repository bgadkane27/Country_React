import "./App.css"
import { AppLayout } from "./components/Layout/AppLayout";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";
import { Home } from "./pages/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "country",
        element: <Country />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]}
]);

const App=(React)=>{
  return(
  <RouterProvider router={router} />
  )  
}

export default App