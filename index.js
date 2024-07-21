import express from "express"
import dotenv from "dotenv"
import { referralRouter } from "./router/referal_router.js"
import { courseRouter } from "./router/course_router.js"
import cors from "cors"
import { authRouter } from "./router/auth.js"
import { authMiddleware } from "./middleware/verify.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

const PORT = process.env.PORT

app.get('/health', (req, res)=>{
    res.send("OK")
})

app.use('/auth', authRouter)

app.use('/referrals', authMiddleware,  referralRouter)
app.use('/courses', courseRouter )

app.listen(PORT || 8080, ()=>console.log(`Server running on PORT ${PORT || 8080}`))