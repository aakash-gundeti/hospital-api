import mongoose from "mongoose";

const PatientSchema = mongoose.Schema({
  phone_number: { type: String, required: true, unique:true },
  gender: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true }
})

export const Patient = mongoose.model("Patient", PatientSchema);