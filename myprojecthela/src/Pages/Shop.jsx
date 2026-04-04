import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "T-Shirt", price: "$20" },
  { id: 2, name: "Jacket", price: "$50" },
];

export default function Shop() {
  return (
    <div className="p-10 grid grid-cols-2 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}