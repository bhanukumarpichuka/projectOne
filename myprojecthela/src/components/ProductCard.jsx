import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow overflow-hidden cursor-pointer"
    >
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Image</span>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-500">{product.price}</p>

        <Link to={`/product/${product.id}`} className="block mt-2">
          View Details →
        </Link>
      </div>
    </motion.div>
  );
}