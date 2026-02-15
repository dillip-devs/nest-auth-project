import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async signup(data: { name: string; email: string; password: string }) {
    const user = new this.userModel(data);
    return user.save();
  }

  async login(data: { email: string; password: string }) {
    return this.userModel.findOne({
      email: data.email,
      password: data.password,
    });
  }
}
