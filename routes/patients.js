import express from 'express';
import { createPatientReport, getAllPatientReports, registerPatient } from '../controllers/patientController.js';
import { jwtToken } from '../middlewares/auth.js';

const patientRouters = express.Router();

patientRouters.post("/register", jwtToken, registerPatient);
patientRouters.post("/:id/create_report", jwtToken, createPatientReport);
patientRouters.get("/:id/all_reports", jwtToken, getAllPatientReports);

export default patientRouters;