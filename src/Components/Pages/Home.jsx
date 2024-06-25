import React from "react";
import Popular from "../Popular";
import Veg from "../veg";
import Nonveg from "../Nonveg"
import { motion } from 'framer-motion';

function Home ()
{
    return(
        < motion.div 
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2}}>
            <Veg/>
            <Popular/>
            <Nonveg/>
       
        </motion.div>
    );
}

export default Home;