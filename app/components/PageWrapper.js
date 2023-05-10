"use client"

import { AnimatePresence, motion } from "framer-motion";

const PageWrapper = ({children}) => {
    return ( 
        <AnimatePresence>
            <motion.div initial={{ opacity: 0}}
            animate={{ opacity: 1, y:0}}
            exist={{ opacity: 0, y: 20}}
            transition={{ delay: 1}}>
                {children}
            </motion.div>
        </AnimatePresence>
     );
}
 
export default PageWrapper;