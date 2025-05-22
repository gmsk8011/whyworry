"use client";
import React, { useState } from "react";
import { FlipWords } from "../ui/flip-words";
import { BackgroundLines } from "@/ui/background-lines";
import { motion, AnimatePresence } from "framer-motion";

export default function FlipWordsDemo() {
  const words = [
    "Do you have any problem ?",
    "Can you do something about it ?",
    "Then Why worry. Be happy",
  ];

  const [sentence, setSentence] = useState(words[0]);

  const handleYes = () => {
    if (sentence === words[0]) {
      setSentence(words[1]);
    } else {
      setSentence(words[2]);
    }
  };

  const handleNo = () => {
    setSentence(words[2]);
  };

  const handleReset = () => {
    setSentence(words[0]);
  };

  return (
    <BackgroundLines className="h-screen">
      <div className="h-screen flex justify-center items-center px-4">
        <div className="text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 text-center">
          <FlipWords word={sentence} /> <br />

          <AnimatePresence mode="wait">
            {sentence !== words[2] ? (
              <motion.div
                key="options"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1 }}
                className="flex items-center justify-center m-6 gap-4"
              >
                <button
                  onClick={handleYes}
                  className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Yes
                  </span>
                </button>

                <button
                  onClick={handleNo}
                  className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    No
                  </span>
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="reset"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1 }}
                className="flex items-center justify-center m-6"
              >
                <button
                  onClick={handleReset}
                  className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-green-700 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Reset
                  </span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </BackgroundLines>
  );
}
