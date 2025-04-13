import { Router } from 'express';
import { getAllUsers, getUserById, createUser, updateUser,deleteUser, addFriend, removeFriend } from '../../controllers/userControllers';

const router = Router();

userRouter.get('/')
 .get(getAllUsers)
 .post(createUser);

userRouter.get('/:userId')
 .get(getUser)
 .put(updateUser)
 .delete(deleteUser);

userRouter.post('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);
 
    export default userRouter;