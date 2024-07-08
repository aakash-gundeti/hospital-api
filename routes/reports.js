import express from 'express';
import { getReportsByStatus } from '../controllers/reportsController.js';

const reportRouters = express.Router();

reportRouters.get("/:status", getReportsByStatus);

export default reportRouters;