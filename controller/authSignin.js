import {db} from '../db/index.js'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

export const authSignin = async(req, res)=>{
    const body = req.body
    try {
        const user = await db.user.findUnique({
            where:{
                email: body.email,
            },
            
        })

        console.log(user, "USER");

        if(user === null){
            throw new Error("Invalid Credentials")
        }

        if(user){
            //compare password
            const password = await bcrypt.compare(body.password, user.password)
            //if comaprison fails throw error
            if(!password) throw new Error("Password Mis-match!")
            //else create a payload and pass to jwt.sign() to encode the data
            const payload = {
                id: user.id,
                email: user.email,                
            }
            //encode the payload data
            const token = jwt.sign(payload, process.env.JWT_SECRET || "", {
                expiresIn: "1d"
            })

            return res.json({
                user:{
                   ...payload,
                    token,
                }
            })
        }

        
    } catch (error) {
        //send back error  
        console.log(error);      
        return res.json({
            msg: "Invailid Credentials, Try again"
        })
    }
}