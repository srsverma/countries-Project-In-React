import {createRoot} from 'react-dom/client'
import App from "./App";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Contact from './components/Contact';
import Home from './components/Home';
import Error from './components/Error';
import CountryDetail from './components/CountryDetail';



let router = createBrowserRouter([
  {
    path: "/",
    element: < App/>,
    errorElement: < Error/>,
    children:[
        {
            path: "/",
            element: <Home />
        },
        {
        path: "/Contact",
        element: <Contact />
    },
        {
        path: "/:country",
        element: <CountryDetail />
    },
]
 
    
  },
]);
const root = createRoot(document.querySelector('#root'))




root.render( <RouterProvider router={router} />) 