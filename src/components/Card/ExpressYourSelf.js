import React, { useState, useEffect } from "react";
import FloatingReactionItem from "./FloatingReactionItem";
import { motion, AnimatePresence } from "framer-motion";

const ExpressYourSelf = () => {
  const emos = ["👍", "🚀", "🔥", "⚡"];
  const extraEmojs = ["😍", "❤️", "😕"];
  const [pathIndex, setPathIndex] = useState(0);
  const [liveEmoj, setLiveEmoj] = useState([]);

  useEffect(() => {
    let interval = setInterval(() => {
      setPathIndex((idx) => (idx >= 2 ? 0 : idx + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <img src="https://chroniclehq.com/images/emoji-bg.png" alt="same" />
      <div className="absolute bottom-10 left-14 rounded-full drop-shadow-xl bg-[#1d1d1c] px-0.5">
        <ul className="flex justify-center items-center">
          {emos.map((e, idx) => {
            return (
              <li className="inline">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  key={idx}
                  onClick={() =>
                    setLiveEmoj([
                      ...liveEmoj,
                      <FloatingReactionItem key={liveEmoj + 1} x={idx * 60}>
                        <p className="text-2xl">{e}</p>
                      </FloatingReactionItem>,
                    ])
                  }
                  className="rounded-full drop-shadow-xl hover:scale-[1.15] ease-linear duration-200 bg-[#262626] px-3 py-2 text-md m-2">
                  {e}
                </motion.button>
              </li>
            );
          })}
          <li className="inline">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                setLiveEmoj([
                  ...liveEmoj,
                  <FloatingReactionItem key={liveEmoj + 1} x={4 * 55}>
                    <p className="text-2xl">{extraEmojs[pathIndex]}</p>
                  </FloatingReactionItem>,
                ])
              }
              className="rounded-full drop-shadow-xl hover:scale-[1.15] ease-linear duration-200 bg-[#262626] px-3 py-2 text-md mr-2">
              <motion.div
                key={pathIndex}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}>
                {extraEmojs[pathIndex]}
              </motion.div>
            </motion.button>
          </li>
        </ul>
        {liveEmoj.map((p) => p)}
      </div>
    </div>
  );
};

export default ExpressYourSelf;
