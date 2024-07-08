import { Patient } from "../models/Patients.js";
import { Report } from "../models/Reports.js";

export async function registerPatient(req, res){
  const { name, gender, phone_number, age } = req.body
  try{
    let patient = await Patient.findOne({ phone_number });
    if(patient){
      return res.status(200).json({ patient });
    }

    patient = new Patient({ name, gender, phone_number, age });
    await patient.save();

    res.status(201).json({ patient });
  }catch(err){
    console.log('registerPatient', err);
    res.status(500).send("Server Error");
  }
}

export async function createPatientReport(req, res){
  const { status } = req.body;
  const doctorId = req.doctor.id;
  const patientId = req.params.id;
  try{
    let patient = await Patient.findById(patientId);
    if(!patient){
      return res.status(400).json({ msg: "Patient not found" });
    }

    const report = new Report({ doctor: doctorId, patient: patientId, status });
    await report.save();

    res.status(201).json(report);
  }catch(err){
    console.log('createPatientReport', err);
    res.status(500).send("Server Error");
  }
}

export async function getAllPatientReports(req, res){
  let patientId = req.params.id;
  try{
    const reports = await Report.find({patient: patientId}).sort({date: 1});
    res.status(200).json(reports);
  }catch(err){
    console.log('getAllPatientReports', err);
    res.status(500).send("Server Error");
  }
}