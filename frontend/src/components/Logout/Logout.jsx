import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        await fetch(
          "https://bharat-explorer-ys4i.onrender.com/api/v1/user/logout",
          {
            method: "POST",
            credentials: "include",
          }
        );
      } catch (error) {
        console.error("Logout failed:", error);
      } finally {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        navigate("/login");
      }
    };
    logoutUser();
  }, [navigate]);

  return null;
}

export default Logout;
