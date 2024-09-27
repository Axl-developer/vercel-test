import { Request, Response } from "express";
import { app } from ".."

app.get('/auth/login', (req: Request, res: Response) => {
    res.send('Habla especial')
})
  