import User from "@/app/models/user"
import { connectDB } from "@/app/utils/helpers"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        await connectDB()
        const {email} = await req.json()
        const user = await User.findOne({email})
        if(user)
            return NextResponse.json({user:true})
        return NextResponse.json({messege : "user doesn't exist"})

        
    } catch (error) {
        return NextResponse.json({messege : "error finding user"})

    }
}