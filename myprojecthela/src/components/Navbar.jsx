import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 shadow flex justify-between">
      <h1 className="text-xl font-bold">Clothify</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}