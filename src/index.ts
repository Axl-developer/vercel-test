import { authRouter } from "./routes/auth";
const express = require('express');

export const app = express()
const PORT = 8000

app.use('/auth',authRouter())

app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
  })

export default app