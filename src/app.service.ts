import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Users.name) private readonly users: Model<UsersDocument>,
  ) {}
  getHello(): string {
    this.users.find({});
    return 'Hello World!';
  }
}
