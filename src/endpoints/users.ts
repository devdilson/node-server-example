import { Request, Response } from "express";
import { User } from "../models/user";
import * as admin from 'firebase-admin/auth';

export async function handleUserRequest(req: Request, res: Response) {
  res.setHeader("Content-Type", "application/json");
   const users = await admin.getAuth().listUsers(2);

  res.send(users);
}
