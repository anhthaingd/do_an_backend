const roomService = require("./../services/room.service");

const createRoom = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await roomService.createRoom(req.body),
  });
};

const getRoomByUserID = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await roomService.getRoomByUserID(req.params.userID),
  });
};

const updateRoom = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await roomService.updateRoom(req.params.roomID),
  });
}
module.exports = {
  createRoom,
  getRoomByUserID,
  updateRoom
};
