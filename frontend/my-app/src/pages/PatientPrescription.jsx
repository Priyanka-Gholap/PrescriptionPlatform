import { useEffect, useState } from "react";
import "./PatientPrescription.css";
import API_BASE_URL from "../config/api";   // ✅ ONLY NEW LINE

export default function PatientPrescriptions() {
  const [prescriptions, setPrescriptions] = useState([]);
  const patient = JSON.parse(localStorage.getItem("patient"));

  useEffect(() => {
    if (!patient?._id) return;

    fetch(`${API_BASE_URL}/patient/prescriptions/${patient._id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then(setPrescriptions)
      .catch(err => console.error("Fetch error:", err));
  }, [patient?._id]);

  return (
    <div className="patient-prescriptions">
      <h2>Your Prescriptions</h2>

      {prescriptions.length === 0 && (
        <p>No prescriptions yet</p>
      )}

      {prescriptions.map(p => (
        <div key={p._id} className="prescription-card">
          <p>Prescription ID: {p._id}</p>

          <button
            onClick={() =>
              window.open(`${API_BASE_URL}${p.pdfPath}`, "_blank")
            }
          >
            Download Prescription
          </button>
        </div>
      ))}
    </div>
  );
}
