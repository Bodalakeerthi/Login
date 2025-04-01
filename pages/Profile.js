import { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaSignOutAlt, FaMapMarkerAlt, FaPlus, FaLocationArrow } from "react-icons/fa";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  });
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
    setAddresses(storedAddresses);
  }, []);

  const handleEdit = () => setIsEditing(!isEditing);
  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const handleAddAddress = () => {
    if (!newAddress.trim()) return;
    const updatedAddresses = [...addresses, newAddress];
    setAddresses(updatedAddresses);
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
    setNewAddress("");
  };

  const handleDeleteAddress = (index) => {
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
  };

  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <div className="profile-section">
        <h2>Personal Information</h2>
        {isEditing ? (
          <div className="edit-form">
            <input type="text" name="name" value={user.name} onChange={handleChange} />
            <input type="email" name="email" value={user.email} onChange={handleChange} />
            <input type="tel" name="phone" value={user.phone} onChange={handleChange} />
            <button onClick={handleEdit}>Save</button>
          </div>
        ) : (
          <div className="profile-info">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <button onClick={handleEdit}><FaEdit /> Edit Profile</button>
          </div>
        )}
      </div>
      <div className="profile-section">
        <h2><FaMapMarkerAlt /> Saved Addresses</h2>
        <input type="text" value={newAddress} onChange={(e) => setNewAddress(e.target.value)} placeholder="Enter new address" />
        <button onClick={handleAddAddress}><FaPlus /> Add Address</button>
        <ul>
          {addresses.length === 0 ? (
            <p>No saved addresses.</p>
          ) : (
            addresses.map((address, index) => (
              <li key={index}>
                {address}
                <button onClick={() => handleDeleteAddress(index)}><FaTrash /></button>
              </li>
            ))
          )}
        </ul>
      </div>
      <button className="logout-btn"><FaSignOutAlt /> Logout</button>
    </div>
  );
};

export default Profile;
