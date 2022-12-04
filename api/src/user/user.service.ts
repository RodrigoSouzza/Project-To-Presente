import { ResultDto } from './../dtoGeneric/result.dto';
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserRegisterDto } from './dto/user.register.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async listUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
 
  async register(data: UserRegisterDto): Promise<ResultDto>{
    
    let user = new User()
      user.name = data.name
      user.cpf = data.cpf
      user.email = data.email
      user.password = bcrypt.hashSync(data.password,8) 

      return this.userRepository.save(user)
      
      .then((result) => {
        return <ResultDto>{
          status: true,
          message: "Usuário cadastrado com sucesso!"
        }
      })
      .catch((error) => { 
        return <ResultDto>{
          status: false,
          message: "Houve um erro ao cadastrar o usuário!"
        }
      })      
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.userRepository.createQueryBuilder('user').where('email = :email', { email })
    .getOne();
  }
}
