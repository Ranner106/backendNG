"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controller/UserController");
const UserRouter = (0, express_1.Router)();
const { create, getUser } = new UserController_1.default();
UserRouter.get('/:username', getUser);
UserRouter.post('/register', create);
exports.default = UserRouter;
//# sourceMappingURL=UserRouter.js.map