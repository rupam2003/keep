import User from "@/app/models/user"
import { connectDB } from "@/app/utils/helpers"
import { NextResponse } from "next/server"

export async function DELETE(req) {
    try {
        await connectDB()
        const {email,note_id} = await req.json()
        
        await User.findOneAndUpdate({email},{$pull:{tasks:{_id: note_id}}})


        return NextResponse.json({messege : "note deleted"})
        
    } catch (error) {
        return NextResponse.json({messege : "something went wrong"})

    }
}

