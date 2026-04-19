import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Sidebar from "../components/Sidebar";
import StatusStepper from "../components/StatusStepper";
import InfoTile from "../components/InfoTile";

import { tilesData, depositInfo, treasuryInfo } from "../data/data";

function Dashboard() {
  const location = useLocation();
  const username = localStorage.getItem("username") || "User";

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const tdStyle = {
    border: "1px solid #ddd",
    padding: "8px"
  };

  return (
    <>
      <Sidebar />

      <div style={{ marginLeft: "240px", padding: "20px" }}>
        <h1>Welcome {username} 🎉</h1>

        {(location.pathname === "/dashboard" ||
          location.pathname === "/") && (
          <>
            {/* GREEN BOX */}
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div style={{
                backgroundColor: "#E6F4EA",
                padding: "15px",
                borderRadius: "10px",
                border: "1px solid green"
              }}>
                <h3>PD - TRMPBL01 - 032626 - 4591 - EDUSCHOL</h3>
              </div>
            )}

            {/* STEPPER */}
            <StatusStepper />

            {/* 🔥 TILES USING MAP */}
            <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
              {loading
                ? "Loading tiles..."
                : tilesData.map((item, index) => (
                    <InfoTile
                      key={index}
                      label={item.label}
                      value={item.value}
                      color={item.color}
                    />
                  ))}
            </div>

            {/* 🔥 TABLES USING MAP */}
            <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
              
              {/* LEFT */}
              <div style={{ flex: 1, background: "#fff", padding: "15px" }}>
                <h3>Deposit Account Information</h3>

                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    {depositInfo.map((row, index) => (
                      <tr key={index}>
                        <td style={tdStyle}>{row.label}</td>
                        <td style={tdStyle}>{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* RIGHT */}
              <div style={{ flex: 1, background: "#fff", padding: "15px" }}>
                <h3>Department & Treasury Details</h3>

                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    {treasuryInfo.map((row, index) => (
                      <tr key={index}>
                        <td style={tdStyle}>{row.label}</td>
                        <td style={tdStyle}>{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Dashboard;