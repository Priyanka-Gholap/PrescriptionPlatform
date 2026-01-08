import { useState } from "react";
import "./ConsultationForm.css";
import { useNavigate } from "react-router-dom";


export default function ConsultationForm() {
  const [step, setStep] = useState(3);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const submit = () => {
  if (!formData.transactionId || !formData.consent) {
    setError(true);
    return;
  }

  alert("Consultation Submitted Successfully");
  navigate("/patient/dashboard");
};

  return (
    <div className="payment-container">
      <h2>Scan and Pay using UPI App</h2>

      <div className="payment-box">
        <div className="qr-section">
          <img src="/qr.png" alt="QR" />
          <p>or</p>
          <p><strong>UPI ID:</strong> doctor@upi</p>
        </div>

        <div className="pay-details">
          <p>Pay Using Any App</p>
          <h1>₹ 600</h1>
          <p>(After Payment)</p>

          <input
            name="transactionId"
            placeholder="Enter Transaction ID*"
            onChange={handleChange}
          />
        </div>
      </div>

      {/* CONSENT */}
      <div className="consent-box">
        <h4>CONSENT FOR ONLINE CONSULTATION</h4>
        <p>
          I have understood that this is an online consultation without a
          physical checkup. The doctor relies on my description. I hereby
          give my consent.
        </p>

        <label>
          <input
            type="checkbox"
            name="consent"
            onChange={() =>
              setFormData({ ...formData, consent: true })
            }
          />
          YES, I ACCEPT
        </label>
      </div>

      {error && <p className="error">All fields required</p>}

      <button className="submit-btn" onClick={submit}>
        Submit Appointment
      </button>
    </div>
  );
}
