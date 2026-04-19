import { useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const menuItems = [
    { name: "Worklist", path: "/worklist" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Reports", path: "/reports" }
  ];

  return (
    <div style={{
      width: "220px",
      height: "100vh",
      backgroundColor: "#f5f5f5",
      padding: "15px",
      position: "fixed",
      left: 0,
      top: 0
    }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "20px"
        }}
      />

      {menuItems.map((item) => (
        <div
          key={item.name}
          onClick={() => navigate(item.path)}
          style={{
            padding: "12px",
            marginBottom: "10px",
            cursor: "pointer",
            borderRadius: "5px",
            backgroundColor:
              location.pathname === item.path ? "#2563EB" : "transparent",
            color:
              location.pathname === item.path ? "white" : "black",
            fontWeight:
              location.pathname === item.path ? "bold" : "normal"
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;