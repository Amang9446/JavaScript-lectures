const jwt = require("jsonwebtoken");
const secreatKey = "zdfhgasbcegzrxgcgbsbjcfgrgfcnka83745637w5tx4q83tw";
const verifyToken = (req, res, next) => {
  const token = req.header("Auth");
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "Token is not provoded" });
  }
  try {
    const decodeToken = jwt.verify(token, secreatKey);
    req.userId = decodeToken.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = verifyToken;
