import {ipcMain} from 'electron';
import {UserModel} from '../models/user';
import * as bcrypt from 'bcrypt';

ipcMain.on('login', async (e, args) => {
  const existingUser = await UserModel.findOne({email: args.email});
  const matchPassword = bcrypt.compareSync(args.password, existingUser!.password);
  if (existingUser && matchPassword) {
    console.log(existingUser);
    return existingUser;
  } else {
    e.reply('Wrong Password or Email', {status: 404});
    return;
  }
});

ipcMain.on('register', async (e, args) => {
  const existingUser = await UserModel.findOne({email: args.email});
  if (existingUser) {
    return console.log('existing User');
  }
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(args.password, salt);

  try {
    await UserModel.create({
      ...args,
      password: hash,
    });
  } catch (error) {
    return console.log('Sthing went wrong went hashing password', error);
  }
});
