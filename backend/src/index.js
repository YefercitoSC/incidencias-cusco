// backend/src/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ ok: true, time: new Date() });
});

const multer = require('multer');
const upload = multer({ dest: process.env.UPLOAD_DIR || 'uploads/' });

app.post('/api/reports', upload.array('photos', 5), async (req, res) => {
  // req.body contiene title, description, category, latitude, longitude, etc.
  // req.files contiene los archivos subidos
  // Aquí harían insert en DB y devolver id
  res.status(201).json({ message: 'Reporte recibido (prototipo)', body: req.body, files: req.files });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API listening on ${PORT}`));