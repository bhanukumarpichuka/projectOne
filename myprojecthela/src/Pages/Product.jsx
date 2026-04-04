import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();

  return (
    <div className="p-10">
      <h1 className="text-3xl">Product {id}</h1>
      <p>Product details coming soon...</p>
    </div>
  );
}