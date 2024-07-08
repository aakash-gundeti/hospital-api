import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import doctorRouters from './routes/doctors.js';
import patientRouters from './routes/patients.js';
import reportRouters from './routes/reports.js';
import { connectToDatabase } from './config/db.js';

dotenv.config({ path: './.env' });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/doctors", doctorRouters);
app.use("/patients", patientRouters);
app.use("/reports", reportRouters);

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
  connectToDatabase();
})