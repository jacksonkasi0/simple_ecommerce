const permit = (req, res, next) => {
	if (req.loginType === 1) {
	  next();
	} else {
	  return res.status(400).json({ msg: "Not authorized" });
	};
  };
  
  module.exports = permit;