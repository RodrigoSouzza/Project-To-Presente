import { AuthService } from './../auth/auth.service';
import { UserService } from './../user/user.service';
import { Injectable, Inject, HttpException, HttpStatus, forwardRef } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Token } from './token.entity';
import { User } from 'src/user/user.entity';

@Injectable()
export class TokenService {
  constructor(
    @Inject('TOKEN_REPOSITORY')
    private tokenRepository: Repository<Token>,
    private userService: UserService,
    @Inject(forwardRef(() => AuthService))
    private authservice: AuthService
  ) {}

    async saveToken(hash: string, username: string){
      let objToken = await this.tokenRepository.findOne({where:{username: username}})
      if(objToken){
        this.tokenRepository.update(objToken.id, {
          hash: hash 
        })
      }else {
        this.tokenRepository.insert({
          hash: hash,
          username: username
        })
      }
    }

    async refreshToken(oldToken: string){
      let objToken = await this.tokenRepository.findOne({where:{ hash: oldToken }})
      if(objToken){
        let user = await this.userService.findOne(objToken.username)
        return this.authservice.login(user)
      }else{
        return new HttpException({
          errorMessage: 'Token Inválido'
        }, HttpStatus.UNAUTHORIZED)
      }
    }

    async getUserByToken(token: string): Promise<User>{
      let objToken: Token = await this.tokenRepository.findOne({where:{hash: token}})
      if(objToken){
        let user = await this.userService.findOne(objToken.username)
        return user
      }else{
        return null
      }
    }
}