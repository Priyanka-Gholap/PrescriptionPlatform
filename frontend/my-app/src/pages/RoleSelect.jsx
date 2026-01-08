import { useNavigate } from "react-router-dom";
import "./RoleSelect.css";

export default function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div className="role-wrapper">
      <div className="role-card">
        <h2>Online Prescription Platform</h2>
        <p>Select your role to continue</p>

        <button onClick={() => navigate("/patient/auth")}>
          I am a Patient
        </button>

        <button
          className="doctor-btn"
          onClick={() => navigate("/doctor/auth")}
        >
          I am a Doctor
        </button>
      </div>
    </div>
  );
}
