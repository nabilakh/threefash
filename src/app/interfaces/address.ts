import { ObjectId } from "mongoose";

interface IAddress {
  _id: string;
  UserId: ObjectId;
  mobileNumber: string;
  alternatePhone: string;
  village: string;
  districts: string;
  province: string;
  zipCode: string;
  cityDistrictTown: string;
  state: string;
}

export { IAddress };
