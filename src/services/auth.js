import db from "../models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 } from "uuid";
const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));
require("dotenv").config();
export const registerService = ({
  username,
  email,
  password,
  firstName,
  lastName,
  role,
  phone,
  address,
}) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOrCreate({
        where: {
          phone,
        },
        defaults: {
          email,
          username,
          password: hashPassword(password),
          firstName,
          lastName,
          role,
          phone,
          address,
        },
      });
      const token =
        response[1] &&
        jwt.sign(
          { id: response[0].id, phone: response[0].phone },
          process.env.SECRET_KEY,
          { expiresIn: "2d" }
        );
      resolve({
        err: token ? 0 : 2,
        message: token ? "Success register" : "Phone existed",
        token: token || null,
        userId: response[0].id,
        role: response.role,
        loginUserIDRd: response[0].id,
      });
    } catch (error) {
      reject(error);
    }
  });

export const loginService = ({ phone, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: {
          phone,
        },
        raw: true,
      });
      const isCorrectPassword =
        response && bcrypt.compareSync(password, response.password);
      const token =
        isCorrectPassword &&
        jwt.sign(
          { id: response.id, phone: response.phone },
          process.env.SECRET_KEY,
          { expiresIn: "2d" }
        );
      resolve({
        err: token ? 0 : 2,
        message: token
          ? "Success login"
          : response
          ? "Password incorrect"
          : "Phone not found",
        token: token || null,
        userId: token ? response.id : null,
        role: token ? response.role : null,
        loginUserIDRd: token ? response.role : null,
      });
    } catch (error) {
      reject(error);
    }
  });
