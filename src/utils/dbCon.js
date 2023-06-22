//const mongoose =require("mongoose")
import mongoose from "mongoose";

export default mongoose
	.connect("mongodb://localhost:27017/nextjsUser", {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => {
		console.log("connection successfully...");
	})
	.catch((e) => {
		console.log(`No connectuin, error:${e}`);
	});
