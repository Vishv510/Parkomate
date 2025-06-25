import mongoose, {Schema} from 'mongoose';

const slotSchema = new Schema({
    parkingLotId : { type: Schema.Types.ObjectId, ref: "ParkingLot"},
    soltNumber: String,
    isOccupied: {type: Boolean, default: false},
});

export const Slot = mongoose.model("Slot", slotSchema);