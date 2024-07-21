import {db} from '../db/index.js'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

export const authSignup = async(req, res)=>{
    const body = req.body
    
    try {
        const newUser = await db.user.create({
            data:{
                email: body.email,
                name: body.name,
                password: await bcrypt.hash(body.password, 10),   
            }
        })
        

        if(newUser){
            const payload = {
                id: newUser.id,
                email: newUser.email
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET || "", {
                expiresIn: "1d"
            })
          
            return res.json({
                ...payload,
                token
        })
        }
    } catch (error) {
        console.log(error);
        
        return res.json({
            msg: String(error)
        })
    }
}