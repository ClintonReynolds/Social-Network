import { Router } from 'express';
import thoughtsRouter from './thoughtsRoutes.js';
import userRoutes from './userRoutes.js';

const router = Router();

router.use('/thoughts', thoughtsRouter);
router.use('/users', userRoutes);

export default router