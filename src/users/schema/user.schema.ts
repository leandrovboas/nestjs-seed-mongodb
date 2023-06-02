import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  active: boolean;
}

export interface User {
  id: string;
  name: string;
  age: number;
  active: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
