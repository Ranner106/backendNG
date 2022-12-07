"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const User_model_1 = require("../../models/User.model");
const Account_model_1 = require("../../models/Account.model");
const bcrypt_1 = require("../../utils/bcrypt");
const config_1 = require("../../config/config");
class UserService {
    constructor() {
        this.getUser = async (username) => {
            const findUser = await User_model_1.default.findOne({
                where: { username },
                attributes: { exclude: ['password'] },
            });
            return findUser;
        };
        this.create = async (credentials) => {
            const sequelize = new Sequelize.Sequelize(config_1.config);
            const { username, password } = credentials;
            const t = await sequelize.transaction();
            const hash = await (0, bcrypt_1.hashPassword)(password);
            try {
                const newAccount = await Account_model_1.default.create({}, {
                    transaction: t,
                });
                const newUser = await User_model_1.default.create({
                    username: username,
                    password: hash,
                    accountId: newAccount.id,
                }, { transaction: t });
                await t.commit();
                const userInfo = {
                    id: newUser.id,
                    username: newUser.username,
                    accountId: newAccount.id,
                    balance: newAccount.balance,
                };
                return userInfo;
            }
            catch (e) {
                console.log(e);
                throw e;
            }
        };
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map