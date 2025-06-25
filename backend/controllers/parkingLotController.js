import ParkingLot from "../model/ParkingLot";

const createParkingLot = async (req, res) => {
    const { name, address, totalSlots } = req.body;

    try{
        const lot = await ParkingLot.create({
            ownerId: req.user.id,
            name,
            address,
            totalSlots 
        });

        res.json(lot);
    }catch (error){
        res.status(500).json({
            message : error
        });
        console.error(error);
    }
}
