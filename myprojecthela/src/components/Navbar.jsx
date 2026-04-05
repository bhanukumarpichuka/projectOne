import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow bg-white sticky top-0 z-50">
      <h1 className="text-2xl font-bold">Clothify</h1>

      <div className="hidden md:flex gap-6 font-medium">
        <Link to="/">Home</Link>
        <Link to="/shop?cat=men">Men</Link>
        <Link to="/shop?cat=women">Women</Link>
        <Link to="/shop?cat=kids">Kids</Link>
        <Link to="/shop?cat=beauty">Beauty</Link>
      </div>

      <div className="flex items-center gap-4">
        <motion.input
          whileFocus={{ scale: 1.05 }}
          type="text"
          placeholder="Search..."
          className="border px-3 py-1 rounded-full outline-none"
        />

        <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
          👤
        </motion.div>
      </div>
    </nav>
  );
}