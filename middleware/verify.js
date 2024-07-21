import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const auth_header = req.headers.authorization;
  if (!auth_header?.startsWith("Bearer "))
    return res.status(401).send("Unauthorized");

  const token = auth_header.split(" ")[1];

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET || "");
    req.user = data;
    next();
  } catch (error) {
    return res.status(401).send("Unauthorized");
  }
};
