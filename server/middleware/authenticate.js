const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function authenticate(req, res, next) {
	try {
		const token = req.headers['authorization'];
		const data = await jwt.verify(token, process.env.JWT_SECRET);
		req.userId = data.userId;
		const user = await User.findById({ _id: req.userId })
		req.loginType = user.loginType;
		console.log(req.loginType);
		next();
	} catch (err) {
		console.log(err.message);
		return res.status(400).json({ message: 'Acceess Denied' });
	};
};

module.exports = authenticate;
