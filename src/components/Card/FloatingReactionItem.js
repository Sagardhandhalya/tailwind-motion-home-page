import { motion } from "framer-motion";
import React from "react";

function FloatingReactionItem({ children, x }) {
  console.log("hi./.", x);

  return (
    <motion.div
      className="animation-fly"
      animate={{
        opacity: [1, 0.75, 0.5, 0],
        bottom: [5, 50, 100, 150],
        left: [x, x + 10, x, x + 10],
      }}
      transition={{ duration: 1,ease:'linear' }}>
      {children}
    </motion.div>
  );
}

export default FloatingReactionItem;
