import ParkingLot from "../model/ParkingLot";

const createParkingLot = async (req, res) => {
    const { name, address, totalSlots } = req.body;

    try{
        const lot = await ParkingLot.create({
            ownerId: req.user.id,
            name,
            address,
            totalSlots, 
            location: {
                type: "Point",
                coordinates
            }
        });

        res.json(lot);
    }catch (error){
        res.status(500).json({
            message : error
        });
        console.error(error);
    }
}

const getNearbyParkingLots = async (req, res) => {
    const { lat , lan } = req.query;

    try{
        const lots = await ParkingLot.find({
            location: {
                $near : {
                    $geometry: {
                        type: "Point",
                        coordinates: [parseFloat(lng), parseFloat(lat)],
                    },
                    $maxDistance: 5000, // 5 km
                }
            }
        });

        res.json(lots);
    } catch(error){
        console.error(error);
        res.status(500).json({
            message: error
        });
    }
}

module.exports = {createParkingLot, getNearbyParkingLots};