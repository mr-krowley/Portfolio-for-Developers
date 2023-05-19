//import { RouterProvider, createBrowserRouter, Link} from "react-router-dom";
import "./App.css";
import { Layout } from "./layout/layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contacts } from "./pages/Contacts";
import { Routes, Route } from "react-router-dom";
function App() {


  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="_about_me" element={<About />} />
          <Route path="projects_me" element={<Projects />} />
          <Route path="contact-me" element={<Contacts />}  />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
