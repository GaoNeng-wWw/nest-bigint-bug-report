import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from './user.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:123456789Sd!@localhost:27017/?authMechanism=DEFAULT&authSource=admin',
    ),
    MongooseModule.forFeature([
      {
        name: Users.name,
        schema: UsersSchema,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
