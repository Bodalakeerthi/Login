import Link from "next/link";
import { FaUser, FaClipboardList, FaCog, FaSignOutAlt, FaFacebook, FaTwitter, FaInstagram, FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
      <div className={`sidebar ${isOpen ? "open" : ""}`} role="navigation" aria-hidden={!isOpen}>
        <button className="close-btn" onClick={toggleSidebar}><FaTimes /></button>
        <ul>
          <li><Link href="/Profile" ><FaUser className="icon" /> Profile</Link></li>
          <li><Link href="/orders" ><FaClipboardList className="icon" /> Orders</Link></li>
          <li><Link href="/settings" ><FaCog className="icon" /> Settings</Link></li>
          <li><Link href="/logout" ><FaSignOutAlt className="icon" /> Logout</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
