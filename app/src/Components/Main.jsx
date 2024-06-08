import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./../Pages/Home";
import Contact from "./../Pages/Contact";
import FindJob from "./../Pages/FindJob";
import About from "./../Pages/About";
import NotFound from "../Pages/NotFound";

export default function Main(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} path="/" />
                    <Route element={<Home />} path="/home" />
                    <Route element={<Contact />} path="/contact" />
                    <Route element={<FindJob />} path="/findjob" />
                    <Route element={<About />} path="/about" />
                    <Route element={<NotFound />} path="*" />
                </Routes>
            </BrowserRouter>
        </>
    )
}