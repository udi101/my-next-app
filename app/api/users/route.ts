import { NextRequest, NextResponse } from "next/server"

export  const GET = async (req: Request) => {
    return await NextResponse.json({name:'Udi Mazor'})
}