import { useNavigate } from "react-router-dom";
import "./PrescriptionForm.css";
import API_BASE_URL from "../config/api";   // ✅ ONLY NEW LINE

export default function PrescriptionForm({ consultationId }) {
  const navigate = useNavigate();
  const doctor = JSON.parse(localStorage.getItem("doctor"));

  const submit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    const res = await fetch(
      `${API_BASE_URL}/prescription/${consultationId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    const json = await res.json();
    alert("Prescription Generated");
    window.open(`${API_BASE_URL}${json.pdfUrl}`, "_blank");
    navigate("/doctor/prescriptions");
  };

  return (
    <form className="prescription-sheet" onSubmit={submit}>
      {/* HEADER */}
      <div className="rx-header">
        <div>
          <h3>Dr. {doctor?.name || "Lorem Ipsum"}</h3>
          <p><strong>Address:</strong> address will go here</p>
        </div>
        <p className="date">
          Date: {new Date().toDateString()}
        </p>
      </div>

      <div className="rx-divider" />

      {/* CARE */}
      <label>Care to be taken</label>
      <textarea name="care" required />

      {/* MEDICINE */}
      <label>Medicine</label>
      <textarea name="medicine" />

      <div className="rx-divider" />

      {/* FOOTER */}
      <div className="rx-footer">
        <p>Name of doctor</p>
      </div>

      <button type="submit" className="rx-btn">
        Generate Prescription
      </button>
    </form>
  );
}
