const express = require('express');
const multer = require('multer');
const path = require('path');
const xlsx = require('xlsx');
const Student = require('../models/Student');

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Route to handle file upload
router.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    const filePath = path.join(__dirname, '../uploads', req.file.filename);
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // Save each entry to the database
    for (let data of sheetData) {
      const student = new Student({
        certificateId: data['Certificate ID'],
        studentName: data['Student Name'],
        internshipDomain: data['Internship Domain'],
        startDate: new Date(data['Start Date']),
        endDate: new Date(data['End Date']),
      });
      await student.save();
    }

    res.status(200).json({ message: 'File uploaded and data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error processing file' });
  }
});

module.exports = router;
