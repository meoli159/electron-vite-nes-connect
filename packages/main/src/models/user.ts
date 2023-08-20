import {Schema, model} from 'mongoose';

interface IUser {
  email: string;
  userName: string;
  password: string;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
    },
    userName: String,
    password: {
      type: String,
      required: true,
    },
  },
  {timestamps: true},
);

export const UserModel = model('UserModel', userSchema);
