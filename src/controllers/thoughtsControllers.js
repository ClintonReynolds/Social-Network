import { Thought, User } from '../models';

export const createThought = async (req, res) => {
    const thought = new Thought(req.body);
    try {
        await thought.save();
        res.status(201).json(thought);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    }

export const getAllThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.status(200).json(thoughts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getThoughtById = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.status(200).json(thought);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        );
        if (!thought) {
            res.status(404).json({ message: 'No thought found with this ID' });
        } else {
            res.json(thought);
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

export const deleteThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
        if (!thought) {
            res.status(404).json({ message: 'No thought found with this ID' });
        } else {
            res.json({ message: 'Thought deleted successfully' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

export const addReaction = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $addToSet: { reactions: req.body } },
            { new: true }
        );
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.status(200).json(thought);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const removeReaction = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { new: true }
        );
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.status(200).json(thought);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


