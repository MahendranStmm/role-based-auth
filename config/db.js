const mongoose = require("mongoose");

const url =
  "mongodb+srv://Mahi:stmmsara@clusterfsb.opmw8qr.mongodb.net/Rolebase-auth?retryWrites=true&w=majority";

const DBconnected = async () => {
  try {
    const con = await mongoose.connect(url);
    console.log(`DB connected:${con.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = DBconnected;
