import mongoose, { Schema } from 'mongoose';

const parkingLotSchema = new Schema({
    ownerId: {type: Schema.Types.ObjectId,  ref: "User"},
    name: String,
    address: String,
    totalSlots: Number,
    allocatedSlots: Number,
    location: {
        type: String,
        coordinates: [Number]
    }
})

module.exports = mongoose.model('ParkingLot', ParkingLotSchema);
