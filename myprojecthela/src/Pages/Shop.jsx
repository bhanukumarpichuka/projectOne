import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "Oversized T-Shirt", price: "$25" },
  { id: 2, name: "Denim Jacket", price: "$60" },
  { id: 3, name: "Hoodie", price: "$40" },
  { id: 4, name: "Summer Dress", price: "$55" },
  { id: 5, name: "Sneakers", price: "$80" },
  { id: 6, name: "Formal Shirt", price: "$35" },
];

export default function Shop() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Shop Collection</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <ProductCard product={p} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}