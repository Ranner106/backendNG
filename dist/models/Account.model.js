"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Account extends sequelize_1.Model {
}
Account.init({
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.INTEGER,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    },
    balance: {
        allowNull: false,
        type: sequelize_1.FLOAT,
    },
}, {
    underscored: true,
    sequelize: _1.default,
    tableName: 'Accounts',
    modelName: 'Account',
    timestamps: false,
});
exports.default = Account;
//# sourceMappingURL=Account.model.js.map