import { useState, useRef, useEffect } from "react";

function Sidebar() {
  const [active, setActive] = useState("Worklist");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // auto focus
  }, []);

  const menu = ["Worklist", "Dashboard", "Reports"];

  return (
    <div style={{
      width: "200px",
      backgroundColor: "#eee",
      padding: "20px"
    }}>
      <input
        ref={inputRef}
        placeholder="Search..."
        style={{ width: "100%", marginBottom: "20px" }}
      />

      {menu.map((item) => (
        <div
          key={item}
          onClick={() => setActive(item)}
          style={{
            padding: "10px",
            cursor: "pointer",
            backgroundColor: active === item ? "blue" : "transparent",
            color: active === item ? "white" : "black"
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;