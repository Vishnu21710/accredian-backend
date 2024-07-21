import express from "express";
import { createReferral } from "../controller/createReferral.js";

export const referralRouter = express.Router()



referralRouter.post('/',createReferral)




