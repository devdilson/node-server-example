import { Request, Response } from "express";
import { User } from "../models/user";

export function handleUserRequest(req: Request, res: Response) {
  res.setHeader("Content-Type", "application/json");
  const scooby: User = {
    id: 1,
    name: "Scooby",
    age: 10,
    message: process.env.EXAMPLE_PROPERTY + "",
  };
  res.send(scooby);
}
