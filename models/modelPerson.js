import mongoose from "mongoose"; 

const personSchema = new mongoose.Schema(
  {
    nombre: {
      type: String
    },
    edad: {
      type: Number
    },
    deletedAt: {  
      type: Date,
      default: null  
    }
  },
  {
    timestamps: true, //  Agrega createdAt y updatedAt automáticamente
    versionKey: false 
  }
);

const ModelPerson = mongoose.model("personas", personSchema);

export default ModelPerson; 
