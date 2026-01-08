import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function PatientAuth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

 const submit = async (e) => {
  e.preventDefault();

  try {
    let res;

    if (isLogin) {
      const data = Object.fromEntries(new FormData(e.target));

      res = await fetch("http://localhost:5000/patient/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          phone: data.phone,
        }),
      });
    } else {
      const formData = new FormData(e.target);

      res = await fetch("http://localhost:5000/patient/signup", {
        method: "POST",
        body: formData,
      });
    }

    // ✅ HANDLE EXPECTED ERRORS FIRST
    if (res.status === 401) {
      alert("Invalid email or phone");
      return;
    }

    if (res.status === 409) {
      alert("Patient already exists. Please login.");
      setIsLogin(true);
      return;
    }

    if (!res.ok) {
      alert("Something went wrong");
      return;
    }

    const json = await res.json();

    if (!json?._id) {
      alert("Invalid server response");
      return;
    }

    localStorage.setItem("patient", JSON.stringify(json));
    navigate("/patient/dashboard");

  } catch (err) {
    console.error("Auth error:", err);
    alert("Cannot connect to server");
  }
};

  return (
    <div className="auth-wrapper">
      <form className="auth-card" onSubmit={submit}>
        <h2>{isLogin ? "Patient Login" : "Patient Signup"}</h2>

        {!isLogin && (
          <>
            <input name="name" placeholder="Name" required />
            <input name="age" placeholder="Age" required />
            <input name="surgeryHistory" placeholder="Surgery History" />
            <input
              name="illnessHistory"
              placeholder="Illness History (comma separated)"
            />
            <input type="file" name="profileImage" accept="image/*" required />
          </>
        )}

        <input name="email" placeholder="Email" required />
        <input name="phone" placeholder="Phone" required />

        <button type="submit">
          {isLogin ? "Login" : "Signup"}
        </button>

        <p className="switch-text" onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "New patient? Create account"
            : "Already registered? Login"}
        </p>

        {/* ✅ TEST CREDENTIALS */}
        {isLogin && (
          <div className="test-credentials">
            <p><strong>Test Patient Login</strong></p>
            <p>Email: patient@test.com</p>
            <p>Phone: 12345</p>
          </div>
        )}
      </form>
    </div>
  );
}
