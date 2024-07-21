import jwt from "jsonwebtoken";
import { db } from "../db/index.js";


const getUser = async(req, res)=>{


    const query = req.query

    const token = query.token

    if(!token){
        return res.json({
            msg: "Token not provided"
        })
    }

    const data = jwt.verify(token, process.env.JWT_SECRET || "")
    
    try {
        const user = await db.user.findUnique({
            where:{
                id: data.id
            },
            select:{
                id: true,
                email: true
            }
        })

        return res.json(user)
    } catch (error) {
        console.log(error);
        return res.json(error)
    }
}


export default getUser