const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const cookieConfig = {
  httpOnly: true,
  secure: process.env.NODE_DEV === "local",
  sameSite: "strict",
  maxAge: 60 * 60 * 1000
};
const refreshCookieConfig = {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
};
const generateAccestoken = async (payload) => {
  const secret = process.env.JWT_SECRET_KEY;
  const option = { expiresIn: "1h" };
  const token = jwt.sign(payload, secret, option);
  return token;
};

const generateRefreshtoken = async (payload) => {
  const secret = process.env.JWT_SECRET_KEY;
  const option = { expiresIn: "15d" };
  const token = jwt.sign(payload, secret, option);
  return token;
};

const generateResetToken = function generateResetToken() {
  const token = crypto.randomBytes(16).toString("hex");
  const hashToken = crypto.createHash("sha256").update(token).digest("hex");
  return { token, hashToken };
};

const generateResetPasswordUrl = function generateResetPasswordUrl(id, token) {
  const backendUrl = process.env.BACKEND_URL || "http://localhost:8080";
  const reseturl = `${backendUrl}/${process.env.BASE_URL}/resetPassword?id=${id}&token=${token}`;
  return reseturl;
};

module.exports = {
  generateAccestoken,
  generateRefreshtoken,
  cookieConfig,
  refreshCookieConfig,
  generateResetToken,
  generateResetPasswordUrl,
};
