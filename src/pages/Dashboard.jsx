import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";

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
    }, 2000);
  }, []);

  const tdStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    fontSize: "14px"
  };

  return (
    <>
      <Sidebar />

      <div style={{ marginLeft: "240px", padding: "20px" }}>
        <h1>Welcome {username} 🎉</h1>

        {(location.pathname === "/dashboard" ||
          location.pathname === "/") && (
          <>
            {/* 🔥 GREEN BOX */}
            {loading ? (
              <Skeleton variant="rectangular" height={70} />
            ) : (
              <div
                style={{
                  backgroundColor: "#E6F4EA",
                  padding: "15px",
                  borderRadius: "10px",
                  border: "1px solid #4CAF50",
                  marginTop: "20px"
                }}
              >
                <h3 style={{ margin: 0 }}>
                  PD - TRMPBL01 - 032626 - 4591 - EDUSCHOL
                </h3>
                <p style={{ margin: 0, fontSize: "12px", color: "gray" }}>
                  Generated Unique Account Number
                </p>
              </div>
            )}

            {/* 🔥 STEPPER */}
            {loading ? (
              <Skeleton variant="rectangular" height={80} />
            ) : (
              <StatusStepper />
            )}

            {/* 🔥 TILES */}
            <div
              style={{
                display: "flex",
                gap: "15px",
                marginTop: "25px"
              }}
            >
              {loading
                ? [1, 2, 3, 4, 5].map((i) => (
                    <Skeleton
                      key={i}
                      variant="rectangular"
                      width={120}
                      height={80}
                    />
                  ))
                : tilesData.map((item, index) => (
                    <InfoTile
                      key={index}
                      label={item.label}
                      value={item.value}
                      color={item.color}
                    />
                  ))}
            </div>

            {/* 🔥 TABLES */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "30px"
              }}
            >
              {loading ? (
                <>
                  <Skeleton variant="rectangular" width="100%" height={150} />
                  <Skeleton variant="rectangular" width="100%" height={150} />
                </>
              ) : (
                <>
                  {/* LEFT TABLE */}
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#fff",
                      padding: "15px",
                      borderRadius: "10px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                    }}
                  >
                    <h3>Deposit Account Information</h3>

                    <table
                      style={{ width: "100%", borderCollapse: "collapse" }}
                    >
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

                  {/* RIGHT TABLE */}
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#fff",
                      padding: "15px",
                      borderRadius: "10px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                    }}
                  >
                    <h3>Department & Treasury Details</h3>

                    <table
                      style={{ width: "100%", borderCollapse: "collapse" }}
                    >
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
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Dashboard;