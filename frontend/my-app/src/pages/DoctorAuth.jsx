import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import API_BASE_URL from "../config/api";   // ✅ ONLY NEW LINE

export default function DoctorAuth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));

    const url = isLogin
      ? `${API_BASE_URL}/doctor/login`
      : `${API_BASE_URL}/doctor/signup`;

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const doctor = await res.json();

    if (!res.ok || !doctor?._id) {
      alert("Invalid credentials");
      return;
    }

    localStorage.setItem("doctor", JSON.stringify(doctor));
    navigate("/doctor/profile");
  };

  return (
    <div className="auth-wrapper">
      <form className="auth-card" onSubmit={submit}>
        <h2>{isLogin ? "Doctor Login" : "Doctor Signup"}</h2>

        {!isLogin && (
          <>
            <input name="name" placeholder="Full Name" required />
            <input name="specialty" placeholder="Specialty" required />
            <input
              name="experience"
              placeholder="Experience (eg: 1.5)"
              required
            />
          </>
        )}

        <input name="email" placeholder="Email" required />
        <input name="phone" placeholder="Phone Number" required />

        <button type="submit">
          {isLogin ? "Login" : "Create Account"}
        </button>

        <p className="switch-text" onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "New doctor? Create account"
            : "Already registered? Login"}
        </p>

        {/* ✅ TEST CREDENTIALS */}
        {isLogin && (
          <div className="test-credentials">
            <p><strong>Test Doctor Login</strong></p>
            <p>Email: doctor@test.com</p>
            <p>Phone: 12345</p>
          </div>
        )}
      </form>
    </div>
  );
}
