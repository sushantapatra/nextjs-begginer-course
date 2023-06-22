import "@/utils/dbCon";
import User from "@/models/userModels";
import { NextResponse } from "next/server";

export async function POST(req, res) {
	try {
		console.log(req);
		const body = await req.json();
		await User.Create(body);
		return NextResponse.json(
			{
				message: "Message Sent Successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{
				message: "Server Error ! please try again",
			},
			{ status: 500 }
		);
	}
}
