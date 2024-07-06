import { db } from "../db/index.js"

export const getCourses = async(req, res)=>{
    try {
        const data = await db.course.findMany({
            select:{
                title: true,
                id: true
            }
        })
        return res.json(data)
    } catch (error) {
        return res.json(error)
    }
}