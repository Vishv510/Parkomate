import mongoose, { Schema } from mongoose;

const bookingShema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref : "User"},
    parkingLotId: {type: Schema.Types.ObjectId, ref : "ParkingLot"},
    slotId: {type: Schema.Types.ObjectId, ref : "Slot"},
    starTime: Date,
    endTime: Date,
    status: {type: String, enum: ['reserved', "completed", "cancelled"]}
})

module.exports = mongoose.model("Booking", bookingShema);