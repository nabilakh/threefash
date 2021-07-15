import { ObjectId } from "mongoose";

interface IOrder {
  _id: string;
  cartId: ObjectId;
  productId: ObjectId;
  quantity: number,
}

export { IOrder };
