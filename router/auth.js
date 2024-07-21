import express from "express";
import { authSignup } from "../controller/authSignup.js";
import { authSignin } from "../controller/authSignin.js";
import getUser from "../controller/getUser.js";

export const authRouter = express.Router()

authRouter.post('/signup', authSignup)

authRouter.post('/signin', authSignin)

authRouter.get('/me', getUser)