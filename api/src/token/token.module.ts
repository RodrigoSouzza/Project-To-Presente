import { UserModule } from './../user/user.module';
import { AuthModule } from '../auth/auth.module';
import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { tokenProviders } from './token.providers';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule), UserModule],
  controllers:[TokenController],
  providers: [
    ...tokenProviders,
    TokenService,
  ],
  exports: [TokenService]
})
export class TokenModule {}
