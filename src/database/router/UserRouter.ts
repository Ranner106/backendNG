import { Router } from 'express';
import UserCrontroller from '../controller/UserController';

const UserRouter = Router();
const { create, getUser } = new UserCrontroller();

UserRouter.get('/:username', getUser);
UserRouter.post('/register', create);

export default UserRouter;
