"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = require("../service/UserService");
class UserCrontroller {
    constructor() {
        this.getUser = async (req, res) => {
            try {
                const { username } = req.params;
                const user = await this.userService.getUser(username);
                return res.status(200).json(user);
            }
            catch (error) {
                res.status(500).json({ message: 'Erro interno' });
            }
        };
        this.create = async (req, res) => {
            try {
                const credentials = req.body;
                const newUser = await this.userService.create(credentials);
                return res.status(201).json(newUser);
            }
            catch (error) {
                res.status(500).json({ message: 'Erro interno' });
            }
        };
        this.userService = new UserService_1.default();
    }
}
exports.default = UserCrontroller;
//# sourceMappingURL=UserController.js.map