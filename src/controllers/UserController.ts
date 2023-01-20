import { Request, Response } from 'express'

export default class UserController {
  async add (req: Request, res: Response): Promise<Response | any> {
    const requiredFields = ['email', 'password']
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ error: `${field} is required` })
      }
    }
  }
}
