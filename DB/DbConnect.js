const mongoose = require("mongoose");
const DB = process.env.DB_URL;

const connectDatabase = () => {
  mongoose
    .connect(DB, {})
    .then((data) =>
      console.log(`Database is connected ${data.connection.host}`)
    );
};

module.exports = connectDatabase;
