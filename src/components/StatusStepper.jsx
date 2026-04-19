function StatusStepper() {
  const steps = [
    { label: "HoO", done: true },
    { label: "HoD", done: true },
    { label: "HoAD", done: false },
    { label: "FD", done: false },
    { label: "Acc Created", done: false }
  ];

  return (
    <div style={{ marginTop: "30px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              textAlign: "center",
              position: "relative"
            }}
          >
            {/* 🔗 CONNECTING LINE */}
            {index !== steps.length - 1 && (
              <div
                style={{
                  position: "absolute",
                  top: "18px",
                  left: "50%",
                  width: "100%",
                  height: "2px",
                  backgroundColor: step.done ? "green" : "#ccc",
                  zIndex: 0
                }}
              />
            )}

            {/* 🟢 OUTER LIGHT GREEN CIRCLE */}
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: step.done ? "#C8E6C9" : "#eee", // light green
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
                position: "relative",
                zIndex: 1
              }}
            >
              {/* 🟢 INNER DARK CIRCLE */}
              <div
                style={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  backgroundColor: step.done ? "green" : "#ccc",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px"
                }}
              >
                {step.done ? "✓" : ""}
              </div>
            </div>

            {/* 🔤 LABEL */}
            <p style={{ marginTop: "8px", fontSize: "12px" }}>
              {step.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatusStepper;