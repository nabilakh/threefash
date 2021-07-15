import { ObjectId } from "mongoose";

interface IProduct {
  _id: string;
  category: ObjectId;
  name: string;
  productBrand: string;
  price: string;
  productPictures: string;
  amount: number;
  description: string;
}

export { IProduct };
