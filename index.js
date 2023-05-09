import express from 'express'
// METODO antiguo
// const express = require('express')

const app = express()

// Enpoins o Middelwers
// Para ver en web:
// http://localhost:3000/employees
app.get('/employees', (req,res) => res.end('obteniendo empleados'))

app.post('/employees', (req,res) => res.end('creando empleados'))

app.put('/employees', (req,res) => res.end('actualizando empleados'))

app.delete('/employees', (req,res) => res.end('eliminando empleados'))


app.listen(3000)
console.log('Server runnig on port 3000')

// Para ejecutar servidor:
// npm run dev