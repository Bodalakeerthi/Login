import { useEffect } from "react";
import { useRouter } from "next/router";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    // Clear user session or authentication tokens
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    localStorage.removeItem("orders");
    
    // Redirect to home after logout
    router.push("/");
  }, []);

  return (
    <div className="logout-page">
      <h1>Logging Out...</h1>
    </div>
  );
};

export default Logout;
