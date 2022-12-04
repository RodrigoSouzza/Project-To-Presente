import { TokenService } from './../token/token.service';
import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {
    constructor(
      private userService: UserService,
      private jwtService: JwtService,
      private tokenService: TokenService      
      ) {}

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findOne(email);
        if (user && bcrypt.compareSync(password, user.password)) {
          const { password, ...result } = user;
          return result;
        }
        return null;
      }

      async login(user: any) {
        const payload = { username: user.email, sub: user.id };
        const token = this.jwtService.sign(payload)
        this.tokenService.saveToken(token, user.email)

        return {
          access_token: token
        };
      }
}
