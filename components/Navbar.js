import Link from "next/link";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import Image from "next/image";
import logo from "../public/logo.png";

const Navbar = ({ setSearchQuery, toggleSidebar }) => {
  return (
    <nav className="navbar">
      <Link href="/">
        <Image src={logo} alt="WayMart" width={100} height={50} className="logo" />
      </Link>
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="navbar-icons">
        <Link href="/cart">
          <FaShoppingCart className="navbar-icon" />
        </Link>
        <FaUser className="navbar-icon" onClick={toggleSidebar} />
      </div>
    </nav>
  );
};

export default Navbar;
