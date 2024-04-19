import User from "@/app/models/user"
import { connectDB } from "@/app/utils/helpers"
import { NextResponse } from "next/server"



export async function POST(req) {
    try {
        await connectDB()
        const {email,title,note,id} = await req.json()
        
        await User.findOneAndUpdate({email,"tasks._id": id},
            {$set: {'tasks.$.title':title,'tasks.$.note':note}}
        )


        return NextResponse.json({messege : "note changed "})
        
    } catch (error) {
        return NextResponse.json({messege : "note couldn't be changed "})

    }
}