const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const sensors = [
  {
    sensorId: 1,
    temperature: 25.3,
    humidity: 60,
    location: "Sala de Servidores"
  },
  {
    sensorId: 2,
    temperature: 27.1,
    humidity: 55,
    location: "Oficina Principal"
  },
  {
    sensorId: 3,
    temperature: 22.8,
    humidity: 70,
    location: "Bodega"
  },
  {
    sensorId: 4,
    temperature: 24.5,
    humidity: 65,
    location: "Laboratorio"
  }
];

// Ruta principal para obtener todos los sensores
app.get('/sensors', (req, res) => {
  res.json(sensors);
});

// Ruta para obtener un sensor por id
app.get('/sensor/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const sensor = sensors.find(s => s.sensorId === id);
  if (sensor) {
    res.json(sensor);
  } else {
    res.status(404).json({ message: 'Sensor no encontrado' });
  }
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor API corriendo en http://192.168.1.15:${PORT}`);
});
