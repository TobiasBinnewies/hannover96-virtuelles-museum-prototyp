import { jwtMiddleware } from "./api";
import jwt from "jsonwebtoken";

export async function getSessionServer(context) {
  const { cookies } = context.req;
  const token = cookies["session-token"];
  if (!token) {
    return null;
  }
  const req = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    await jwtMiddleware(req, {}, () => {});
    return getSessionFromAuthHeader(req);
  } catch (e) {
    return null;
  }
}

export function getSessionFromAuthHeader(req) {
  if (!req.auth) {
    throw { name: "Internal Error" };
  }

  const { id, username, email, expireDate, profilePicture, colors } = req.auth;

  const session = {
    user: { id, username, email, profilePicture, colors },
    expireDate,
  };

  return session;
}

export function getTokenFromUser(user) {
  const { id, username, email } = user;

  // const profilePicture = {
  //   path: image,
  //   position,
  // };

  const current = new Date();
  const expireDate = new Date(
    current.getTime() + 86400000 * process.env.SESSION_EXPIRE_TIME
  );
  expireDate.toLocaleDateString();

  const token = jwt.sign(
    {
      id,
      username,
      email,
      // profilePicture,
      // colors,
      expireDate,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: `${process.env.SESSION_EXPIRE_TIME}d`,
    }
  );
  return token;
}
