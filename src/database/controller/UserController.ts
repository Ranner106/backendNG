import { Request, Response } from 'express';
import UserService from '../service/UserService';

export default class UserCrontroller {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  getUser = async (req: Request, res: Response) => {
    try {
      const { username } = req.params;
      const user = await this.userService.getUser(username);

      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Erro interno' });
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const credentials = req.body;
      const newUser = await this.userService.create(credentials);
      return res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno' });
    }
  };
}
