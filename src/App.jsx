import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import { Layout } from "./layout/layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contacts } from "./pages/Contacts";

function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "_about_me",
    element: <About/>,
  },
  {
    path: "_projects",
    element: <Projects/>,
  },
  {
    path: "_contact-me",
    element: <Contacts/>,
  },
]);


  return (
    <>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </>
  );
}

export default App;
