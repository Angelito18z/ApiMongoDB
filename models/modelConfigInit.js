import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
  {
    dayNightMode: { type: Boolean, default: false },       
    headlights: { type: Boolean, default: false },       
    insideLights: { type: Boolean, default: false },        
    cleanersActive: { type: Boolean, default: false },     
    honkHorn: { type: Boolean, default: false },          
    doorsLocked: { type: Boolean, default: true },
    musicPlaying: { type: Boolean, default: false },
    weather: { 
      type: String, 
      enum: ['soleado', 'nublado', 'lluvia', 'nevado'],
      default: 'soleado'
    }
  },
  {
    timestamps: true,
    versionKey: false 
  }
);

const VehicleState = mongoose.model("VehicleState", vehicleSchema);

export default VehicleState;