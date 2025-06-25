import mongoose, {Schema} from "mongoose";

const reviewSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    parkingLotId: {type: Schema.Type.ObjectId, ref: 'ParkingLot'},
    rating: Number,
    Comment: String,
    createdAt: {tyep: Date, default: Date.now()}
})

export const Review = mongoose.model("Review", reviewSchema);