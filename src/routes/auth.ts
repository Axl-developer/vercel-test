import { Request, Response } from "express";
import { Router } from "express"
  

export const authRouter = () => {
    
    const router = Router()
 
    router.get('/login', (req: Request, res: Response) => {
        res.send('Habla especial')
    })

  
    return router
}
