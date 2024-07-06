import express from "express";
import { getCourses } from "../controller/getCourses.js";

export const courseRouter = express.Router()

courseRouter.route('/')
.get(getCourses)




