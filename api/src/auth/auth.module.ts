import { TokenModule } from './../token/token.module';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [UserModule, PassportModule,TokenModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [JwtModule, AuthService]
})
export class AuthModule {}
