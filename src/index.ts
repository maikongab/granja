import "reflect-metadata";
import express from "express";

import { router } from "./router";

import "./database"


const app = express();

app.use(express.json());

app.use(router);


app.listen(3333,() => console.log("server is running on port 3333"));