import { Request, Response } from "express";
const express = require('express');

export const app = express()
const PORT = 8000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

app.get('/api/mi-endpoint', (req: Request, res: Response) => {
  res.send('About route 🎉 ')
})

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})