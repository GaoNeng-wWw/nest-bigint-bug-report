import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
@Schema()
export class Users {
  @Prop({ default: 0, required: true, type: BigInt })
  uid: bigint;
}
export type UsersDocument = HydratedDocument<Users>;
export const UsersSchema = SchemaFactory.createForClass(Users);
