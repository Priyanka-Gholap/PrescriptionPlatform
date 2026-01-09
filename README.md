🏥 Online Prescription & Consultation Platform (MERN)

A full-stack MERN web application that enables patients and doctors to manage consultations, generate digital prescriptions, and securely store medical data including uploaded files and PDF prescriptions.
This project was developed as part of a technical test assignment.

🚀 Live Project Links

🔗 Frontend (Hosted)
👉 https://onlinepr.netlify.app
(Hosted on Netlify)

🔗 Backend (Hosted)
👉 https://prescriptionplatformbackend.onrender.com
(Node.js + Express API)

📦 Source Code
GitHub Repository:
👉 https://github.com/Priyanka-Gholap/PrescriptionPlatform.git

🔐 Demo Login Credentials
👨‍⚕️ Doctor Login
Email: doctor@test.com
Phone: 12345

🧑‍🦱 Patient Login
Email: test@gmail.com
Phone: 123456789
⚠️ These credentials are provided only for evaluation and testing purposes.

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
Multer (file uploads)
pdf-lib (PDF generation)

✨ Features

👨‍⚕️ Doctor
Doctor registration & login
View assigned consultations
Create digital prescriptions
Auto-generate prescription PDFs

🧑‍🦱 Patient
Patient registration with profile image upload
Login using email & phone
View consultation history
Download prescription PDFs

📄 Prescription System
PDF generation with doctor details and date
Stored securely on server
Accessible via patient dashboard

🌐 API Routes
🔐 Authentication
 
POST	/doctor/signup	    Doctor registration
POST	/doctor/login	      Doctor login
POST	/patient/signup	    Patient signup with image
POST	/patient/login	    Patient login

📊 Data
GET	/doctors	             Fetch all doctors
POST	/consultation	       Create consultation
GET	/doctor/consultations/:doctorId	  Doctor dashboard
GET	/patient/prescriptions/:patientId	  Patient prescriptions

📄 Prescription
POST	/prescription/:consultationId	  Generate prescription PDF

📦 Database Details
This project uses MongoDB Compass as the cloud database.

Database Name: test
Collections:
doctors – Doctor profiles (name, specialty, experience, contact info)
patients – Patient profiles and medical history
consultations – Patient-doctor consultation records
prescriptions – Generated prescriptions with PDF references
Sample data is included to demonstrate full application flow.

🗂 Database Dump
A MongoDB database dump is included for reference.
Location:
/db-dump/
This can be used to restore the database locally if required.

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
Demonstrates real-world MERN architecture
Clean API structure with proper error handling
File uploads and PDF generation implemented

👩‍💻 Author
Priyanka Gholap
MERN Stack Developer
🔗 GitHub: https://github.com/Priyanka-Gholap
