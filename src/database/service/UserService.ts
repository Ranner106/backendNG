/* eslint-disable @typescript-eslint/no-var-requires */
import * as Sequelize from 'sequelize';
import INewUser from '../interfaces/INewUser';
import Users from '../../models/User.model';
import Accounts from '../../models/Account.model';
import { hashPassword } from '../../utils/bcrypt';
import IBalance from '../interfaces/IBalance';

const config = require('../../config/config');

export default class UserService {
  getUser = async (username: string) => {
    const findUser = await Users.findOne({
      where: { username },
      attributes: { exclude: ['password'] },
    });
    return findUser;
  };

  create = async (credentials: INewUser) => {
    const sequelize = new Sequelize.Sequelize(config);
    const { username, password } = credentials;
    const t = await sequelize.transaction();
    const hash = await hashPassword(password);
    try {
      const newAccount = await Accounts.create(
        { balance: 100 },
        {
          transaction: t,
        },
      );
      const newUser = await Users.create(
        {
          username: username,
          password: hash,
          accountId: newAccount.id,
        },
        { transaction: t },
      );

      await t.commit();
      const userInfo = {
        id: newUser.id,
        username: newUser.username,
        accountId: newAccount.id,
        balance: newAccount.balance,
      };

      return userInfo;
    } catch (e) {
      console.log(e);

      throw e;
    }
  };
}
