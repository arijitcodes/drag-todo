const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect(
    process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      if (err) {
        console.log("Error occured while connecting to MongoDB!");
      } else {
        console.log("MongoDB Connected...");
      }
    }
  );
};
