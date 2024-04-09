import {Feedback} from "../models/feedback.model.js";

export const createFeedback = async (req, res, next) => {
    try {
        const {email, feedback} = req.body;
        const data = {
            email,
            feedback
        };
        await Feedback.create(data);
        res.status(201).json({
            message: "Feedback Created",
        });
    } catch (e) {
        next(e);
    }
}