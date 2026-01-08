import { useEffect, useState } from "react";
import PrescriptionForm from "./PrescriptionForm";
import "./DoctorDashboard.css";

export default function DoctorDashboard() {
  const [consultations, setConsultations] = useState([]);
  const [selectedConsultationId, setSelectedConsultationId] = useState(null);

  const doctor = JSON.parse(localStorage.getItem("doctor"));

  useEffect(() => {
    if (!doctor?._id) return;

    fetch(`http://localhost:5000/doctor/consultations/${doctor._id}`)
      .then(res => {
        if (!res.ok) throw new Error("Fetch failed");
        return res.json();
      })
      .then(setConsultations)
      .catch(err => console.error("Fetch error:", err));
  }, [doctor?._id]);

  if (!doctor) {
    return <p>Please login as doctor</p>;
  }

  return (
    <div className="consult-list">
      <h2>Consultations</h2>

      {consultations.length === 0 && (
        <p>No consultations yet</p>
      )}

      {consultations.map(c => (
        <div key={c._id} className="consult-item">
          <div>
            <p><strong>Patient:</strong> {c.patientName}</p>
            <p><strong>Illness:</strong> {c.illnessHistory}</p>
          </div>

          <button onClick={() => setSelectedConsultationId(c._id)}>
            Write Prescription
          </button>
        </div>
      ))}

      {selectedConsultationId && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="close-btn"
              onClick={() => setSelectedConsultationId(null)}
            >
              ✖
            </button>

            <PrescriptionForm consultationId={selectedConsultationId} />
          </div>
        </div>
      )}
    </div>
  );
}
