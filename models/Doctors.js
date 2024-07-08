import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  email: { type: String, required: true, unique:true },
  password: { type: String, required: true },
  name: { type: String, required: true }
})

export const Doctor = mongoose.model("Doctor", DoctorSchema);