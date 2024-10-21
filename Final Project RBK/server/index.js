const express = require("express");
const usersRoutes = require("./routes/usersRoutes.js");
const housesRoutes = require("./routes/housesRoutes.js");
const imgHousesRoutes = require("./routes/imgHousesRoutes.js");
const reservRoutes = require("./routes/reservRoutes.js");
const router = require("./routes/signup.js");
// const authroute = require ("./routes/authroute.js")
const cors = require("cors");
//const dotenv =require('dotenv');

//dotenv.config();

const PORT = 8080;
const app = express();
const db = require("./orm/Models/index.js");
app.use(express.json());
app.use(cors());
app.use("/user", usersRoutes);
app.use("/house", housesRoutes);
app.use("/imgHouse", imgHousesRoutes);
app.use("/reserv", reservRoutes);
app.use("/users", router);
// app.use("/api",authroute);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
