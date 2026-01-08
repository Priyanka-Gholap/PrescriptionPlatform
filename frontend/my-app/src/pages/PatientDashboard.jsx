import { useNavigate } from "react-router-dom";
import "./PatientDashboard.css";

export default function PatientDashboard() {
  const navigate = useNavigate();
  const patient = JSON.parse(localStorage.getItem("patient"));

  if (!patient) {
    return <p>Please login</p>;
  }

  return (
    <div className="patient-dashboard">
      <h2>Welcome, {patient.name}</h2>

      {/* ✅ PROFILE IMAGE */}
      <div className="patient-info">
        <img
          src={
            patient.profileImage
              ? `http://localhost:5000${patient.profileImage}`
              : "/default-avatar.png"
          }
          alt="Patient"
          className="patient-avatar"
        />

        <div className="actions">
          <button onClick={() => navigate("/patient/doctors")}>
            Consult a Doctor
          </button>

          <button onClick={() => navigate("/patient/prescription")}>
            View Prescriptions
          </button>
        </div>
      </div>
    </div>
  );
}
