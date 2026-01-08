import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function DoctorAuth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    const url = isLogin
      ? "http://localhost:5000/doctor/login"
      : "http://localhost:5000/doctor/signup";

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const doctor = await res.json();

    if (!doctor || !doctor._id) {
      alert("Invalid credentials");
      return;
    }

    // ✅ SAVE LOGIN
    localStorage.setItem("doctor", JSON.stringify(doctor));

    // ✅ REDIRECT (THIS WAS MISSING)
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

        <p
          className="switch-text"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "New doctor? Create account"
            : "Already registered? Login"}
        </p>
      </form>
    </div>
  );
}
