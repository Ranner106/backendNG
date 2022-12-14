import { Model, INTEGER, DECIMAL } from 'sequelize';
import db from '.';

class Account extends Model {
  declare id: number;
  declare balance: number;
}

Account.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: INTEGER,
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    },
    balance: {
      allowNull: false,
      type: DECIMAL,
    },
  },
  {
    underscored: true,
    sequelize: db,
    tableName: 'Accounts',
    modelName: 'Account',
    timestamps: false,
  },
);

export default Account;
