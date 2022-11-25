import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import Account from './Account.model';

class User extends Model {
  declare id: number;
  declare username: string;
  declare password: string;
  declare accountId: number;
}

User.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: INTEGER,
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    },
    username: {
      allowNull: false,
      type: STRING,
    },
    password: {
      allowNull: false,
      type: STRING,
    },
    accountId: {
      allowNull: false,
      type: INTEGER,
    },
  },
  {
    underscored: true,
    sequelize: db,
    tableName: 'Users',
    modelName: 'User',
    timestamps: false,
  },
);

User.hasOne(Account, { foreignKey: 'accountId', as: 'idAccount' });
Account.belongsTo(User);

export default User;
