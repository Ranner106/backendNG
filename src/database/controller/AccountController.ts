import { Request, Response } from 'express';
import AccountService from '../service/AccountService';

export default class AccountController {
  private readonly accountService: AccountService;
  constructor() {
    this.accountService = new AccountService();
  }

  findAccount = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const account = await this.accountService.findAccount(Number(id));

      return res.status(200).json(account);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Erro Interno' });
    }
  };
}
