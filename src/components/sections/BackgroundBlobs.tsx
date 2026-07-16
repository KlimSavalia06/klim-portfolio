import { motion } from "framer-motion";

export const BackgroundBlobs = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-brand-bg pointer-events-none">
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-brand-primary opacity-40 blur-3xl"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-20 right-10 w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full bg-brand-secondary opacity-35 blur-3xl"
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
};