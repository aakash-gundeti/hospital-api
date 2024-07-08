import { Report } from "../models/Reports.js";

export async function getReportsByStatus(req, res){
  let { status } = req.params;
  try{
    const reports = await Report.find({ status });
    res.status(200).json(reports);
  }catch(err){
    console.log('getAllReports', err);
    res.status(500).send("Server Error");
  }
}