//express calling 1
const express = require("express");
const app = express();
require("dotenv").config({ path: "Config/.env" });

app.use(express.json());

//routes
const userRoutes = require("./Routes/userRoutes");
app.use("/api/v2/users", userRoutes);

//errorhandler middleware
const notFound = require("./Middlewares/NotFounf");
app.use(notFound);

//database connection
const connectDatabase = require("./DB/DbConnect");
connectDatabase();

const port = process.env.PORT || 5002;
//server cponnection 2
app.listen(port, () => console.log(`Server running port ${port}`));
