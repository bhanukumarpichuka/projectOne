import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="border p-4 rounded shadow"
    >
      <h2 className="text-xl">{product.name}</h2>
      <p>{product.price}</p>
      <Link to={`/product/${product.id}`} className="text-blue-500">
        View
      </Link>
    </motion.div>
  );
}