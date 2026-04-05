import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Product {id}</h1>
      <p>Details coming soon...</p>
    </div>
  );
}