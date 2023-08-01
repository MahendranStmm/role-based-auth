const jwt = require("jsonwebtoken");

async function authentication(req, res, next) {
  try {
    const token = await req.headers["authorization"];
    if (!token) {
      res.status(404).json({ msg: " Access Denied " });
    } else {
      const data = await jwt.verify(token, process.env.SECRET_KEY);
      req.userId = data.userId;
      req.loginType = data.loginType;
      next();
    }
  } catch (error) {
    console.log({ msg: error });
  }
}

module.exports = authentication;
