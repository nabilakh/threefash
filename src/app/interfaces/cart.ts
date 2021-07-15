import { ObjectId } from "mongoose";

interface ICart {
  _id: string;
  UserId: ObjectId;
}

export { ICart };
