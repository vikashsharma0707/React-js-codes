import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Display from "./Pages/Display";
import Contact from "./Pages/Contact";
import Addres from "./Addres";
import Number from "./Number";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="display" element={<Display />}>
            <Route path="addres" element={< Addres/>} />
            <Route path="number" element={<Number />} />
            
            </Route>
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
