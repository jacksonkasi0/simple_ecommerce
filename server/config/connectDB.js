const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		const connect = await mongoose.connect(process.env.MONGODB_URI);
		console.log(`MongoDB Connected: ${connect.connection.host}`);	
	} catch (error) {
		console.log(error);
	}
}

module.exports = connectDB;