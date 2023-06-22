import mongoose from "mongoose";
import "@/utils/dbCon";
const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},

		phone: {
			type: Number,
			required: true,
		},

		message: {
			type: String,
			required: true,
		},
	},
	{ timestamp: true }
);

//now need to create a connection
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
