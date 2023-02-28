import { PrismaService } from '@/prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateLeaveWordDto } from './dto/create-leave-word.dto'
import { UpdateLeaveWordDto } from './dto/update-leave-word.dto'
// import { user } from '@prisma/client'

@Injectable()
export class LeaveWordService {
  constructor(private prisma: PrismaService) { }
  async create(createLeaveWordDto: CreateLeaveWordDto) {
    // console.log(user)
    // const list = await this.prisma.word.create({
    //   data: createLeaveWordDto,
    // })
    return '1'
    // return 'This action adds a new leaveWord';
  }

  findAll() {
    return `This action returns all leaveWord`
  }

  findOne(id: number) {
    return `This action returns a #${id} leaveWord`
  }

  update(id: number, updateLeaveWordDto: UpdateLeaveWordDto) {
    return `This action updates a #${id} leaveWord`
  }

  remove(id: number) {
    return `This action removes a #${id} leaveWord`
  }
}
