import { PrismaService } from '@/prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateWorkspaceDto } from './dto/create-workspace.dto'
import { UpdateWorkspaceDto } from './dto/update-workspace.dto'
import { User } from '../decorators/getUser'
@Injectable()
export class WorkspaceService {
  constructor(private prisma: PrismaService) { }
  async create(createWorkspaceDto: CreateWorkspaceDto) {
    console.log(111)
    console.log(await User())
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
