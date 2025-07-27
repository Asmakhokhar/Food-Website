import mongoose from "mongoose";


export const dbConection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "RESTURANT"
    })
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((err) => {
        console.log(`Some error occured: ${err}`);
    });
};