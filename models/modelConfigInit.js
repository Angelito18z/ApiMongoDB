import mongoose from "mongoose"; 

const configInit = new mongoose.Schema(
  {
    "buzzer-claxon": { type: Number, required: true },
    "led-dia-noche": { type: Number, required: true },
    "led-direccional": { type: Number, required: true },
    "led-interno": { type: Number, required: true },
    "servo-parabrisas": { type: Number, required: true }
  },
  {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
    versionKey: false 
  }
);

const ConfigInit = mongoose.model("ConfigInit", configInit);

export default ConfigInit;
