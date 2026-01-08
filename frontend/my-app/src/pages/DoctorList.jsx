import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DoctorList.css";

export default function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then(res => res.json())
      .then(setDoctors)
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="doctor-grid">
      {doctors.map(d => (
        <div key={d._id} className="doctor-card">
          <img
            src={d.profileImage || "/doctor.png"}
            alt="doctor"
          />

          <h3>{d.name}</h3>
          <p>{d.specialty}</p>

          <button onClick={() => navigate(`/consult/${d._id}`)}>
            Consult
          </button>
        </div>
      ))}
    </div>
  );
}
