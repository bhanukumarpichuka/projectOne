import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="p-10 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold"
      >
        Welcome to Clothify
      </motion.h1>
      <p className="mt-4">Discover the latest fashion trends</p>
    </div>
  );
}
