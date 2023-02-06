import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service'
import { JwtService } from '@nestjs/jwt'
import { hash, verify } from 'argon2'
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}
  async create(dto: CreateAuthDto) {
    const password = await hash(dto.password)
    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        password,
      },
    })
    return '注册成功';
  }
  async login (dto: UpdateAuthDto){
    const user = await this.prisma.user.findUnique({
      where:{
        name: dto.name
      }
    })
    if (!(await verify(user.password, dto.password))) {
      throw new BadGatewayException('密码输入错误')
    }
    return this.token(user)
  }
  private async token({name,id}){
    return {
      token: await this.jwt.signAsync({
        name,
        sub:id
      })
    }
  }
}
