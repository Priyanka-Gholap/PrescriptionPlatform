import { useState } from "react";
import "./ConsultationForm.css";
import { useNavigate, useParams } from "react-router-dom";

export default function ConsultationForm() {
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { doctorId } = useParams();

  const patient = JSON.parse(localStorage.getItem("patient"));

  const [formData, setFormData] = useState({
    illnessHistory: "",
    recentSurgery: "",
    diabetes: "",
    allergies: "",
    others: "",
    transactionId: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setError("");
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  /* ================= SUBMIT ================= */

 const submitConsultation = async () => {
  if (!formData.transactionId || !formData.consent) {
    setError("Payment and consent required");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/consultation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        doctorId,
        patientId: patient._id,
        patientName: patient.name,
        illnessHistory: formData.illnessHistory,
        recentSurgery: formData.recentSurgery,
        diabetes: formData.diabetes,
        allergies: formData.allergies,
        others: formData.others,
        transactionId: formData.transactionId,
      }),
    });

    if (!res.ok) throw new Error("Failed to submit");

    alert("Consultation submitted successfully");
    navigate("/patient/dashboard");
  } catch (err) {
    console.error(err);
    setError("Server error");
  }
};


  /* ================= UI ================= */

  return (
    <div className="consult-form">
      <h2>Consultation Form</h2>
      {error && <p className="error">{error}</p>}

      {/* STEP 1 */}
      {step === 1 && (
        <div className="form-card">
          <textarea
            name="illnessHistory"
            placeholder="Current illness history *"
            value={formData.illnessHistory}
            onChange={handleChange}
          />

          <textarea
            name="recentSurgery"
            placeholder="Recent surgery (with time span) *"
            value={formData.recentSurgery}
            onChange={handleChange}
          />

          <button
            onClick={() => {
              if (!formData.illnessHistory || !formData.recentSurgery) {
                setError("Please fill all fields");
                return;
              }
              setStep(2);
            }}
          >
            Next
          </button>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="form-card">
          <label>Diabetes Status *</label>

          <label>
            <input
              type="radio"
              name="diabetes"
              value="Diabetic"
              checked={formData.diabetes === "Diabetic"}
              onChange={handleChange}
            />
            Diabetic
          </label>

          <label>
            <input
              type="radio"
              name="diabetes"
              value="Non-Diabetic"
              checked={formData.diabetes === "Non-Diabetic"}
              onChange={handleChange}
            />
            Non-Diabetic
          </label>

          <input
            name="allergies"
            placeholder="Any allergies"
            value={formData.allergies}
            onChange={handleChange}
          />

          <input
            name="others"
            placeholder="Other medical history"
            value={formData.others}
            onChange={handleChange}
          />

          <div className="btn-row">
            <button onClick={() => setStep(1)}>Back</button>
            <button
              onClick={() => {
                if (!formData.diabetes) {
                  setError("Select diabetes status");
                  return;
                }
                setStep(3);
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
{step === 3 && (
  <div className="payment-container">
    <h3 className="payment-title">Scan and Pay using UPI App</h3>

    <div className="payment-box">
      {/* LEFT SIDE */}
      <div className="qr-section">
        <img src="/qr.png" alt="QR" />
        <p>or</p>
        <p><strong>UPI ID:</strong> doctor@upi</p>
      </div>

      {/* RIGHT SIDE */}
      <div className="pay-details">
        <p>Pay Using Any App</p>
        <h1>₹ 600</h1>
        <p>(After Payment)</p>

        <input
          name="transactionId"
          placeholder="Enter Transaction ID *"
          value={formData.transactionId}
          onChange={handleChange}
        />
      </div>
    </div>

    {/* CONSENT */}
    <div className="consent-box">
      <h4>CONSENT FOR ONLINE CONSULTATION</h4>
      <p>
        I have understood that this is an online consultation without a
        physical checkup. The doctor relies on my description.
      </p>

      <label>
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
        />
        YES, I ACCEPT
      </label>
    </div>

    {error && <p className="error">{error}</p>}

    <div className="btn-row">
      <button onClick={() => setStep(2)}>Back</button>
      <button className="submit-btn" onClick={submitConsultation}>
        Submit Appointment
      </button>
    </div>
  </div>
)}

    </div>
  );
}
