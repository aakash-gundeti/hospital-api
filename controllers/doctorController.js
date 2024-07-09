import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { Doctor } from '../models/Doctors.js';

export async function registerDoctor(req, res){
  const { name, email, password } = req.body;
  try{
    let doctor = await Doctor.findOne({ email });
    if(doctor){
      return res.status(400).json({ msg: "Doctor already exists", doctor })
    }

    doctor = new Doctor({ name, email, password });
    doctor.password = await bcrypt.hash(password, 10);

    await doctor.save();
    return res.status(200).json({ msg: 'Doctor registered successfully', doctor });
  }catch(err){
    console.log('register',err);
    res.status(500).send("Server Error");
  }
}

export async function loginDoctor(req, res){
  let { email, password } = req.body;
  try{
    let doctor = await Doctor.findOne({ email });
    if(!doctor){
      return res.status(400).json({ msg: "Doctor not found" })
    }

    const isMatch = await bcrypt.compare(password, doctor.password);
    if(!isMatch){
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const payload = {
      doctor: {
        id: doctor._id
      }
    }

    jwt.sign(payload, process.env.JWT_KEY,{ expiresIn: 360000 }, (err, token) => {
      if(err) throw err;
      res.json({ token })
    })
  }catch(err){
    console.log('loginDoctor', err);
    res.status(500).send("Server Error")
  }
}