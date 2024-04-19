import User from "@/app/models/user"
import { connectDB } from "@/app/utils/helpers"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        await connectDB()
        const {email,title,note} = await req.json()
        const tasks = {
            title:title,
            note: note
        }
        await User.findOneAndUpdate({email},{$push:{tasks:tasks}})


        return NextResponse.json({messege : "notes updated"})
        
    } catch (error) {
        return NextResponse.json({messege : "notes is same"})

    }
}

