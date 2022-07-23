const jwt = require('jsonwebtoken');
const User = require('../models/user');


const verifyToken = async (req, res, next) => {
	try {
		const token = req.params.token;
		const data = await jwt.verify(token, process.env.JWT_SECRET);

		if (data !== undefined) {
			const user = await User.findById(data.userId);
			if (user.verified) {
				// res.status(400).json({ msg: 'Account has been verified already' })
				res.redirect("http://localhost:3000")
				return;
			} 
			req.userId = data.userId;
			next()
		} else {
			res.status(400).json({ message: 'Access Denied' });
		}
	} catch (error) {
		console.log(error.message);
		res.status(400).json({ message: 'Access Denied' });
	}
}

module.exports = verifyToken;