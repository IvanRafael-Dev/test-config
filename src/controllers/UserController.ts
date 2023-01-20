import { Request, Response } from 'express'

export default class UserController {
  async add (req: Request, res: Response): Promise<Response | any> {
    if (!req.body.email) {
      return res.status(400).json({ error: 'email is required' })
    }
  }
}
