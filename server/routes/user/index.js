const router = require("express").Router();
const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { sendMail } = require("../../util");
const verifyToken = require("../../middleware/verifyToken");


router.post("/user/signup", async (req, res) => {

	try {

		let { name, email, password, loginType } = req.body;

		if (!name || !email || !password) {
			return res.status(400).json({ msg: "Please enter all fields" });
		}

		const user = await User.findOne({ email });

		if (user) {
			return res.status(400).json({ msg: "User already exists, go to login" });
		}

		const hash = await bcrypt.hash(password, 10);
		password = hash;
		loginType = 2;
		const newUser = new User({ name, email, password, loginType });
		console.log("kasi === " + newUser._id);

		const token = await jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1d" })
		const { info, error } = await sendMail(token, email, name);
		await newUser.save()

		if (info) {
			console.log(info);
			res.status(200).json({ success: true, msg: "mail send successfully. Please check your mail 😃" })
		} else if (error) {
			console.log(error);
			res.status(500).json({ msg: "Something went wrong" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: "Something went wrong" });
	}
});

router.post("/user/login", async (req, res) => {

	const { email, password } = req.body;

	try {

		const user = await User.findOne({ email });

		if (!user) {
			return res.status(400).json({ msg: "User is not exsist, please go to Signup" })
		}

		if (!user.verified) {
			return res.status(400).json({ msg: 'Please verify your email' });
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			console.log(isMatch);
			return res.status(400).json({ message: 'Invalid credentials' })
		}

		const token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
			expiresIn: '1d',
		});

		console.log(token);

		res.status(200).json({ token, success: true, msg: "Lognin successfully" })

	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: "Somthing went wrong" })
	}

});

router.get("/verify/:token", verifyToken, async (req, res) => {
	try {
		const data = await User.findByIdAndUpdate({ _id: req.userId }, { verified: true });

		if (data) {
			res.status(200).json({ success: true, msg: 'Account verified successfully!' })
			setTimeout(() => {
				res.writeHead(301, {
					Location: `http://localhost:3000`
				}).end();
			}, 500)
		} else {
			res.status(500).json({ msg: 'Somthing went wrong!' })
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Somthing went wrong!' })
	}
});

module.exports = router;