import { AuthModule } from './../auth/auth.module';
import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserController } from './user.controller';
import { userProviders } from './user.providers';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers:[UserController],
  providers: [
    ...userProviders,
    UserService,
  ],
  exports: [UserService]
})
export class UserModule {}
