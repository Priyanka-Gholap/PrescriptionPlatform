# 🏥 Online Prescription & Consultation Platform (MERN)

A full-stack **MERN web application** that enables **patients and doctors** to manage consultations, generate digital prescriptions, and securely store medical data including uploaded files and PDF prescriptions.

This project was developed as part of a **technical test assignment**.

---

## 🚀 Live Project Links

### 🔗 Frontend (Hosted)
👉 https://prescriptionplatform.netlify.app/  
(Hosted on Netlify)

### 🔗 Backend (Hosted)
👉 https://prescriptionplatformbackend.onrender.com  
(Node.js + Express API)

📦 Source Code Access

GitHub Repository:
👉 📦 Source Code Access

GitHub Repository:
👉 https://github.com/
<your-username>/<repo-name>
---

## 🔐 Login Credentials

### 👨‍⚕️  Doctor Login
- **Email:** doctor@test.com
- **Phone:** 12345 

### 🧑‍🦱 Patient Login
- **Email:** test@gmail.com
- **Phone:** 123456789 

> ⚠️ These are demo credentials created for testing purposes only.

---

## 🗂️ Server / Database Credentials (For Review)

- **Backend Framework:** Node.js + Express
- **Database:** MongoDB (Atlas)
- **File Storage:** Local server (uploads & PDFs)

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000

🛠️ Tech Stack
Frontend
React.js
React Router
CSS
Fetch API

Backend
Node.js
Express.js
MongoDB (Mongoose)
Multer (File Uploads)
pdf-lib (PDF Generation)

✨ Features
👨‍⚕️ Doctor
Doctor registration & login
View assigned consultations
Create digital prescriptions
Auto-generate PDF prescriptions

🧑‍🦱 Patient
Patient registration with profile image upload
Login using email & phone
View prescriptions
Download prescription PDFs

📄 Prescription System
PDF generation with doctor name & date
Stored securely on server
Accessible via patient dashboard

🌐 API Routes
🔐 Authentication
POST	/doctor/signup	 Doctor registration
POST	/doctor/login	   Doctor login
POST	/patient/signup	 Patient signup with image
POST	/patient/login	 Patient login

📊 Data
GET	/doctors	                        Fetch all doctors
POST	/consultation	                  Create consultation
GET	/doctor/consultations/:doctorId	  Doctor dashboard
GET	/patient/prescriptions/:patientId	Patient prescriptions

📄 Prescription
POST	/prescription/:consultationId	  Generate prescription PDF

🗄️ Database Dump
Located in: /db-dump/
Includes collections:
doctors
patients
consultations
prescriptions

⚙️ How to Run Locally
Backend
cd backend
npm install
npm run dev

Frontend
cd frontend
npm install
npm run dev

📌 Notes for Reviewers
This project demonstrates real-world MERN architecture
Clean API structure & error handling
PDF generation and file handling included
Ready for production enhancements (JWT, role-based auth)

👩‍💻 Author
Priyanka Gholap
MERN Stack Developer
🔗 GitHub: https://github.com/<your-username>
