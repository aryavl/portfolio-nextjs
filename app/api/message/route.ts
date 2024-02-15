import MessageData from "@/models/MessageData";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async(req:Request)=>{
    try {
        const {fullname,email,message} = await req.json()
        await connect()
        const newMessage = new MessageData({
            fullname,
            email,
            message
        })
        await newMessage.save()
        return new NextResponse("message registered ",{status:200,statusText:"Message send successfully"})

    } catch (error:any) {
    console.log("post message error ==>",error.message);
        throw new Error(error.message)
    }
}