import mongoose from "mongoose";

const connection = (DB_URL: string) => {
  mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("connection is successful");
    })
    .catch((err: unknown) => {
      console.log(err);
    });
};
export default connection;
