import User from "../model/User";

const getProfile = async (req, res) => {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
};

module.exports = { getProfile }