const { CourierClient } = require("@trycourier/courier");
require("dotenv").config();

const sendMail = async(token,email,name) => {
	try {

		const courier = CourierClient({
			authorizationToken: process.env.COURIER_TOKEN,
		});
	  
		let info = await courier.send({
			message: {
				to: {
					email: email,
				},
				template: process.env.TEMPLATE_ID,
				data: {
					name: name,
					link: `${process.env.BASE_URL}/api/verify/${token}`,
				},
			},
		});
	  
		return {info};
		
	} catch (error) {
		return {error}
	};
};

module.exports = { sendMail };  