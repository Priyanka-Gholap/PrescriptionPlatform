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
    let json;

    if (isLogin) {
      // LOGIN → JSON
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
      // SIGNUP → FormData
      const formData = new FormData(e.target);

      res = await fetch("http://localhost:5000/patient/signup", {
        method: "POST",
        body: formData,
      });
    }

    // 🔥 READ RESPONSE SAFELY
    json = await res.json();

    if (!res.ok) {
      alert(json.error || "Something went wrong");
      return;
    }

    if (!json._id) {
      alert("Invalid credentials");
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

            <input
              type="file"
              name="profileImage"
              accept="image/*"
              required
            />
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
      </form>
    </div>
  );
}
