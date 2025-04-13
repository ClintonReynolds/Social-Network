import { Router } from 'express';
import { getAllThoughts, getThoughtById, createThought, updateThought, deleteThought, addReaction, deleteReaction } from '../../controllers/thoughtsController.js';

const thoughtsRouter = Router();

thoughtsRouter.get('/')
    .get(getAllThoughts)
    .post(createThought);

thoughtsRouter.get('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

thoughtsRouter.post('/:thoughtId/reactions')
    .post(addReaction);

    thoughtsRouter.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

export default thoughtsRouter;