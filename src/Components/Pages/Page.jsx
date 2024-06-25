import React from "react";
import Home from "./Home"
import Cuisine from "./Cuisine";
import { Route,Routes,useLocation} from "react-router-dom";
import Searchedpage from "./Searchedpage";
import Recipes from "./Recipes";
import { AnimatePresence } from "framer-motion";
function Pages()
{
    const location=useLocation();
    return(
       <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>}/>
            <Route path="/cuisine/:type" element={<Cuisine/>}/>
            <Route path="/searchedpage/:search" element={<Searchedpage/>}/>
            <Route path="/recipe/:name" element={<Recipes/>}/>
        </Routes>
    </AnimatePresence>
    );
}
export default Pages;