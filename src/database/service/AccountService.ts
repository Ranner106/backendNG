import Account from '../../models/Account.model';

export default class AccountService {
  findAccount = async (id: number) => {
    const accountId = await Account.findByPk(id);
    return accountId;
  };
}
