import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
    {params} : { params: {courseId: string} })  {
    try {
        const { userId } = auth();
    } catch (error) {
        console.log("COURSE_ID_ATTACHMENTS", error);
        return new NextResponse("Internal error", { status: 500});
    }
}