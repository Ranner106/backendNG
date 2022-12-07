import * as bcrypt from 'bcrypt';

const hashPassword = async (password: string) => {
  const hash = await bcrypt.hash(password, 10);
  return hash;
};

const comparePasswords = async (password: string, hashFromDatabase: string) => {
  const passwordsMatch = await bcrypt.compare(password, hashFromDatabase);
  return passwordsMatch;
};

export { hashPassword, comparePasswords };
