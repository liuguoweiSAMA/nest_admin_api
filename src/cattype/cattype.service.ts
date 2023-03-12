import { PrismaService } from '@/prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateCattypeDto } from './dto/create-cattype.dto'
import { UpdateCattypeDto } from './dto/update-cattype.dto'
@Injectable()
export class CattypeService {
  constructor(private prisma: PrismaService) { }
  async create(createCattypeDto: CreateCattypeDto) {
    console.log(createCattypeDto)
    await this.prisma.catType.create({
      data: createCattypeDto,
    })
    return '添加成功'
  }
  async findType() {
    const catList = await this.prisma.catType.findMany({
      include: {
        Pet: true,
      },
    })
    return catList
  }
  async findAll() {
    const catList = await this.prisma.catType.findMany({})
    return catList
  }

  async findOne(id: number) {
    const catInfo = await this.prisma.catType.findUnique({
      where: {
        id,
      },
    })
    return catInfo
  }

  async update(id: number, updateCattypeDto: UpdateCattypeDto) {
    await this.prisma.catType.update({
      where: {
        id,
      },
      data: updateCattypeDto,
    })
    return '修改成功'
  }

  async remove(id: number) {
    await this.prisma.catType.delete({
      where: {
        id,
      },
    })
    return '删除成功'
  }
}
