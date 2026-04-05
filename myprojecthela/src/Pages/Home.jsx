import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="h-[80vh] flex flex-col justify-center items-center text-center bg-black text-white">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold"
        >
          Elevate Your Style
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-gray-300"
        >
          Discover premium fashion
        </motion.p>

        <a
          href="/shop"
          className="mt-6 bg-white text-black px-6 py-3 rounded-full"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
}