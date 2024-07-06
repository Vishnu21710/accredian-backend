import express from "express"
import dotenv from "dotenv"
import { referralRouter } from "./router/referal_router.js"
import { courseRouter } from "./router/course_router.js"
import cors from "cors"

dotenv.config()

const app = express()
app.use(cors({
    origin: process.env.CORS,
}))
app.use(express.json())
app.use(express.static('public'))
const PORT = process.env.PORT

app.get('/health', (req, res)=>{
    res.send("OK")
})

app.use('/referrals', referralRouter)
app.use('/courses', courseRouter )

app.listen(PORT || 8080, ()=>console.log(`Server running on PORT ${PORT || 8080}`))