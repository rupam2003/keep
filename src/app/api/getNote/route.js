import User from "@/app/models/user"
import { connectDB } from "@/app/utils/helpers"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        await connectDB()
        const {email,id} = await req.json()
        
        const user = await User.findOne({email})
        const note = user.tasks.find( task => task._id == id)
        return NextResponse.json({note: note})

        
    } catch (error) {
        return NextResponse.json({messege : "error finding user"})

    }
}