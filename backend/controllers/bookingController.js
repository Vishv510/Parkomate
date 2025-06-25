import Booking from "../model/Booking";

const createBooking = async (req, res) => {
    const { parkingLotId, slotId , startTime, endTime } = req.body;

    try{
        const booking = await Booking.create({
            userId: req.user.id,
            parkingLotId,
            slotId,
            startTime,
            endTime,
            status: "reserved"
        });

        res.json(booking);
    } catch( error ){
        console.error(error);
        res.status(500).json({
            message: error,
        })
    }
}

const getUserBookings = async (req, res) => {
    const bookings = await Booking.find({
        userId: req.user.id
    }).populate("parkingLotId slotId");

    res.json(bookings);
}

module.exports = {
    createBooking,
    getUserBookings
}