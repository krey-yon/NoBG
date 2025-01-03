import jwt from "jsonwebtoken";

// Middleware to check if the user is authenticated
const authUser = (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const token_decode = jwt.decode(token);
    req.body.clerkId = token_decode.clerkId;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default authUser;
