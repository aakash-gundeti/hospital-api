import mongoose from "mongoose";

const ReportSchema = mongoose.Schema({
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  status: {
    type: String,
    enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit'],
    date: { type: Date, default: Date.now }
  }
});

export const Report = mongoose.model("Report", ReportSchema);