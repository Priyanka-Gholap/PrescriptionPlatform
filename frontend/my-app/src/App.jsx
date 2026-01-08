import { Routes, Route } from "react-router-dom";

import RoleSelect from "./pages/RoleSelect";
import PatientAuth from "./pages/PatientAuth";
import DoctorAuth from "./pages/DoctorAuth";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorList from "./pages/DoctorList";
import ConsultationForm from "./pages/ConsultationForm";
import DoctorProfile from "./pages/DoctorProfile";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientPrescription from "./pages/PatientPrescription";

export default function App() {
  return (
    <Routes>
      {/* LANDING */}
      <Route path="/" element={<RoleSelect />} />

      {/* AUTH */}
      <Route path="/patient/auth" element={<PatientAuth />} />
      <Route path="/doctor/auth" element={<DoctorAuth />} />

      {/* PATIENT */}
      <Route path="/patient/dashboard" element={<PatientDashboard />} />
      <Route path="/patient/doctors" element={<DoctorList />} />
      <Route path="/consult/:doctorId" element={<ConsultationForm />} />
      <Route path="/patient/prescription" element={<PatientPrescription />}/>


      {/* DOCTOR */}
      <Route path="/doctor/profile" element={<DoctorProfile />} />
      <Route path="/doctor/prescriptions" element={<DoctorDashboard />} />
    </Routes>
  );
}
