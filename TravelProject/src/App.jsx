import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Error from "./Components/Error"
import Hero from "./Components/Hero"
import Details from "./Components/Details";
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Footer from "./Components/Footer";
const approuter = createBrowserRouter([
  {
    path:"/",
    element:[<Header/>,<Hero/>,<Footer/>],
    errorElement:<Error/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/details/:id",
    element:<Details/>
  }
]);

const App=()=>{
  return(
   <>
   <RouterProvider router={approuter}/>
   </>
  )
}
export default App
