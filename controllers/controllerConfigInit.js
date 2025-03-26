import VehicleState from "../models/modelConfigInit.js";

class ConfigInitController {
    // Get current vehicle state
    static async getAll(req, res) {
        try {
            const state = await VehicleState.findOne({}, {_id:0, createdAt:0, updatedAt:0});
            res.json(state || {
                dayNightMode: false,
                headlights: false,
                insideLights: false,
                cleanersActive: false,
                honkHorn: false,
                doorsLocked: true,
                musicPlaying: false,
                weather: 'soleado'
            });
        } catch (error) {
            res.status(500).json({ message: "Error getting vehicle state", error });
        }
    }

// controllerConfigInit.js
static async update(req, res) {
    try {
      const result = await VehicleState.findOneAndUpdate(
        {},
        { $set: req.body },
        { new: true, upsert: true }
      );
      res.send(result);
    } catch (error) {
      res.status(500).send({ message: "Update failed", error });
    }
  }
}

export default ConfigInitController;