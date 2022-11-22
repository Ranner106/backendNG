import { Model, INTEGER, FLOAT, DATE } from 'sequelize';
import db from '.';
import Account from './Account.model';

class Transaction extends Model {
  declare id: number;
  declare debitedAccountId: number;
  declare creditedAccountId: number;
  declare value: number;
  declare createdAt: Date;
}

Transaction.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: INTEGER,
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    },
    debitedAccountId: {
      allowNull: false,
      type: INTEGER,
    },
    creditedAccountId: {
      allowNull: false,
      type: INTEGER,
    },
    value: {
      allowNull: false,
      type: FLOAT,
    },
    createdAt: {
      allowNull: false,
      type: DATE,
    },
  },
  {
    underscored: true,
    sequelize: db,
    tableName: 'Transactions',
    modelName: 'Transaction',
    timestamps: false,
  },
);

Transaction.hasOne(Account, {
  foreignKey: 'debitedAccountId',
  as: 'iddebitedAccount',
});
Transaction.hasOne(Account, {
  foreignKey: 'creditedAccountId',
  as: 'idcreditedAccount',
});

export default Transaction;
