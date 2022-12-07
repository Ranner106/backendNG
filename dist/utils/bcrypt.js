"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePasswords = exports.hashPassword = void 0;
const bcrypt = require("bcrypt");
const hashPassword = async (password) => {
    const hash = await bcrypt.hash(password, 10);
    return hash;
};
exports.hashPassword = hashPassword;
const comparePasswords = async (password, hashFromDatabase) => {
    const passwordsMatch = await bcrypt.compare(password, hashFromDatabase);
    return passwordsMatch;
};
exports.comparePasswords = comparePasswords;
//# sourceMappingURL=bcrypt.js.map