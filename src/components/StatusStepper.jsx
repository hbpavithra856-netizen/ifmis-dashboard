function StatusStepper() {
  const steps = [
    { name: "HoO", completed: true },
    { name: "HoD", completed: true },
    { name: "HoAD", completed: false },
    { name: "FD", completed: false },
    { name: "Acc Created", completed: false }
  ];

  return (
    <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
      {steps.map((step, index) => (
        <div key={index} style={{ textAlign: "center" }}>
          <div style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            backgroundColor: step.completed ? "green" : "gray",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            {step.completed ? "✔" : ""}
          </div>
          <p>{step.name}</p>
        </div>
      ))}
    </div>
  );
}

export default StatusStepper;