"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const Account_model_1 = require("./Account.model");
class User extends sequelize_1.Model {
}
User.init({
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.INTEGER,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    },
    username: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    password: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    accountId: {
        allowNull: false,
        type: sequelize_1.INTEGER,
    },
}, {
    underscored: true,
    sequelize: _1.default,
    tableName: 'Users',
    modelName: 'User',
    timestamps: false,
});
User.hasOne(Account_model_1.default, { foreignKey: 'accountId', as: 'idAccount' });
Account_model_1.default.belongsTo(User);
exports.default = User;
//# sourceMappingURL=User.model.js.map