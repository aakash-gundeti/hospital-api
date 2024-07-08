import express from 'express';
import { loginDoctor, registerDoctor } from '../controllers/doctorController.js';

const doctorRouters = express.Router();

doctorRouters.post("/register", registerDoctor);

doctorRouters.post("/login", loginDoctor);

export default doctorRouters;