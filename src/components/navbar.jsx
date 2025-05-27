import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { IoIosCart } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <Link to="/" className="text-2xl font-extrabold font-style: italic flex justify-evenly gap-2 hover:scale-110 ">TrendyMart<span><FaBagShopping size={30}/></span></Link>
      <Link to="/cart"><button className= "bg-red-500 text-white px-4 py-2 flex justify-evenly gap-2 rounded hover:scale-110 transition w-full"><IoIosCart size={25} /> Cart ({cart.length})</button></Link>
    </nav>
  );
}