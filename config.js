import mongoose from 'mongoose';


mongoose.set('strictQuery', true)

async function dbconnect() {
    try {
       await mongoose.connect('mongodb://localhost:27017/Arduino');
       console.log('Conexión exitosa a MongoDB');
    } catch (error) {
       console.error('Error al conectar a MongoDB:', error.message);
         }
 }

 export default dbconnect;