import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
import apartmentsRouter from "./routes/apartments.js";

const app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/apartments", apartmentsRouter);

export default app;
