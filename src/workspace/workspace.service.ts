import { PrismaService } from '@/prisma/prisma.service'
import { Injectable,applyDecorators, UseGuards } from '@nestjs/common'
import { CreateWorkspaceDto } from './dto/create-workspace.dto'
import { UpdateWorkspaceDto } from './dto/update-workspace.dto'
import { Authid } from '../decorators/auth.id'
import { AuthGuard } from '@nestjs/passport'
@Injectable()
export class WorkspaceService {
  constructor(private prisma: PrismaService){}
  async create(createWorkspaceDto: CreateWorkspaceDto) {
    
  //  const user =  UseGuards(AuthGuard('jwt'))
  // let a = applyDecorators(UseGuards(AuthGuard('jwt'), Authid))
  //  console.log(a)
  //  return a
  //  console.log(user)
    // console.log(createWorkspaceDto)
    // const addCreate = await this.prisma.workspace.create({
    //   data:{
        
    //   }
    // })
    return 'This action adds a new workspace'
  }

  findAll() {
    return `This action returns all workspace`
  }

  findOne(id: number) {
    return `This action returns a #${id} workspace`
  }

  update(id: number, updateWorkspaceDto: UpdateWorkspaceDto) {
    return `This action updates a #${id} workspace`
  }

  remove(id: number) {
    return `This action removes a #${id} workspace`
  }
}
