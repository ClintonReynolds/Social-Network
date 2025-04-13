import { Router } from 'express';
import { getAllThoughts, getThoughtById, createThought, updateThought, deleteThought, addReaction, deleteReaction } from '../../controllers/thoughtsControllers.js';

const thoughtsRouter = Router();

thoughtsRouter.route('/')
    .get(getAllThoughts)
    .post(createThought);

thoughtsRouter.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

thoughtsRouter.route('/:thoughtId/reactions')
    .post(addReaction);

    thoughtsRouter.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

export default thoughtsRouter;