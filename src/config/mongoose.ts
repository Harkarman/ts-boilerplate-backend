import mongoose from 'mongoose';

if (!process.env.PORT) {
    process.exit(1);
}
const database = mongoose
    .connect(process.env.MONGO_DB as string)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log('MongoDB not connected', error.message);
    });
export default database;
