import type { Request, Response } from "express";
import * as userService from "../services/users.service.js";

export const getUsers = async (req: Request, res: Response) => {
  const users = await userService.getUsers();

  res.json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const user = await userService.getUser(id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json(user);
};

export const createUser = async (req: Request, res: Response) => {
  const {
    firstName,
    lastName,
    email,
    password,
    roleId,
    companyId,
  } = req.body;

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await userService.createUser(
    firstName,
    lastName,
    email,
    passwordHash,
    roleId,
    companyId
  );

  res.status(201).json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const user = await userService.deleteUser(id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json({
    message: "User deleted",
  });
};
