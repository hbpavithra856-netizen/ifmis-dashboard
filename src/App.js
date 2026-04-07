import { useState } from "react";
import InfoTile from "./components/InfoTile";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username && password) {
      setIsLoggedIn(true);
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f5f5f5"
    }}>
      {isLoggedIn ? (
        <div style={{ textAlign: "center" }}>
          <h2>Welcome, {username} 🎉</h2>

          <div style={{
            display: "flex",
            gap: "15px",
            marginTop: "30px",
            justifyContent: "center",
            flexWrap: "wrap"
          }}>
            <InfoTile label="Deposit Type" value="PD" color="#E0F2FE" />
            <InfoTile label="Scheme Code" value="TRMPBL01" color="#FCE7F3" />
            <InfoTile label="Number" value="032626" color="#FEF3C7" />
            <InfoTile label="Code" value="4591" color="#DCFCE7" />
            <InfoTile label="Bank" value="EDUSCHOL" color="#FEE2E2" />
          </div>
        </div>
      ) : (
        <div style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          textAlign: "center",
          width: "300px"
        }}>
          <h2>Login</h2>

          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />

          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px"
            }}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default App;