"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const Account_model_1 = require("./Account.model");
class Transaction extends sequelize_1.Model {
}
Transaction.init({
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.INTEGER,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    },
    debitedAccountId: {
        allowNull: false,
        type: sequelize_1.INTEGER,
    },
    creditedAccountId: {
        allowNull: false,
        type: sequelize_1.INTEGER,
    },
    value: {
        allowNull: false,
        type: sequelize_1.FLOAT,
    },
    createdAt: {
        allowNull: false,
        type: sequelize_1.DATE,
    },
}, {
    underscored: true,
    sequelize: _1.default,
    tableName: 'Transactions',
    modelName: 'Transaction',
    timestamps: false,
});
Transaction.hasOne(Account_model_1.default, {
    foreignKey: 'debitedAccountId',
    as: 'iddebitedAccount',
});
Transaction.hasOne(Account_model_1.default, {
    foreignKey: 'creditedAccountId',
    as: 'idcreditedAccount',
});
exports.default = Transaction;
//# sourceMappingURL=Transaction.model.js.map