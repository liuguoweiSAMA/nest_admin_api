import { PrismaService } from '@/prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreatePetDto } from './dto/create-pet.dto'
import { UpdatePetDto } from './dto/update-pet.dto'

@Injectable()
export class PetService {
  constructor(private prisma: PrismaService) { }
  async create(createPetDto: CreatePetDto) {
    await this.prisma.pet.create({
      data: {
        name: createPetDto.name,
        img: createPetDto.img,
        description: createPetDto.description,
        weight: +createPetDto.weight,
        minhair: createPetDto.minhair,
        maxhair: createPetDto.maxhair,
        catTypeId: +createPetDto.catTypeId,
      },
    })
    return '新增成功'
  }

  async findAll(body) {
    console.log(body)
    const data = {
      weight: body.weight && +body.weight,
      catTypeId: body.catTypeId && +body.catTypeId,
    }
    if (!data.weight) {
      delete data.weight
    }
    if (!data.catTypeId) {
      delete data.catTypeId
    }
    const catList = await this.prisma.pet.findMany({
      where: {
        name: {
          contains: body.name,
        },
        ...data,
      },
    })
    return catList
  }

  async findOne(id: number) {
    const catInfo = await this.prisma.pet.findUnique({
      where: {
        id,
      },
    })
    return catInfo
  }

  async update(id: number, updatePetDto: UpdatePetDto) {
    console.log(updatePetDto)
    await this.prisma.pet.update({
      where: {
        id,
      },
      data: {
        name: updatePetDto.name,
        img: updatePetDto.img,
        description: updatePetDto.description,
        weight: +updatePetDto.weight,
        minhair: updatePetDto.minhair,
        maxhair: updatePetDto.maxhair,
        catTypeId: +updatePetDto.catTypeId,
      },
    })
    return '更新成功'
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
