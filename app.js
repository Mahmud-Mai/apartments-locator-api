import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import "dotenv/config";

import indexRouter from "./routes/index.js";
import roomsRouter from "./routes/rooms.js";
import usersRouter from "./routes/users.js";
import apartmentsRouter from "./routes/apartments.js";
import { connect } from "./utils/db.js";

const app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/rooms", roomsRouter);
app.use("/apartments", apartmentsRouter);

connect();

export default app;
