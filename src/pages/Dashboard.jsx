import InfoTile from "../components/InfoTile";
import StatusStepper from "../components/StatusStepper";
import Sidebar from "../components/Sidebar";

function Dashboard({ username }) {
  return (
    <div style={{ display: "flex" }}>

      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div style={{ padding: "20px", flex: 1 }}>
        <h2>Welcome, {username}</h2>

        {/* Status Stepper */}
        <StatusStepper />

        {/* Tiles */}
        <div style={{
          display: "flex",
          gap: "15px",
          marginTop: "30px",
          flexWrap: "wrap"
        }}>
          <InfoTile label="Deposit Type" value="PD" color="#E0F2FE" />
          <InfoTile label="Scheme Code" value="TRMPBL01" color="#FCE7F3" />
          <InfoTile label="Number" value="032626" color="#FEF3C7" />
          <InfoTile label="Code" value="4591" color="#DCFCE7" />
          <InfoTile label="Bank" value="EDUSCHOL" color="#FEE2E2" />
        </div>
      </div>

    </div>
  );
}

export default Dashboard;