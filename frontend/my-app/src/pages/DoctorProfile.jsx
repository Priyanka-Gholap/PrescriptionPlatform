import { useNavigate } from "react-router-dom";

export default function DoctorProfile() {
  const doctor = JSON.parse(localStorage.getItem("doctor"));
  const navigate = useNavigate();

  if (!doctor) return <p>Please login</p>;

  return (
    <div className="doctor-profile">
      <h2>Doctor Profile</h2>

      <p><strong>Name:</strong> {doctor.name}</p>
      <p><strong>Specialty:</strong> {doctor.specialty}</p>
      <p><strong>Experience:</strong> {doctor.experience} years</p>

      <button
        onClick={() => navigate("/doctor/prescriptions")}
      >
        Go to Prescription Dashboard
      </button>
    </div>
  );
}
