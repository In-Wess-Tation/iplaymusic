"use client"

import { AnimatePresence, motion } from "framer-motion";
import Footer from "./Footer";


const FooterWrapper = () => {
    return ( 
        <AnimatePresence>
            <motion.div initial={{ opacity: 0, y:20}}
            animate={{ opacity: 1, y:0}}
            exit={{ opacity: 0, y: 20}}
            transition={{ type: "spring", duration: 0.20}}>
                <Footer />
            </motion.div>
        </AnimatePresence>
     );
}
 
export default FooterWrapper;