import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSechema.js";

export const send_reservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, date, time } = req.body;
    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler(400, "All fields are required"));
    }

    try {
        await Reservation.create({ firstName, lastName, email, phone, date, time });

        res.status(201).json({
            success: true,
            message: "Reservation sent successfully",
        });
    } catch (error) {
        
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map( err => err.message );
            return next(new ErrorHandler(400, validationErrors.join(", ")));
        }

        
        
        return next(error);
    }
};

export default send_reservation