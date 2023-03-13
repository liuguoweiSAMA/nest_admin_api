import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Query } from '@nestjs/common'
import { PetService } from './pet.service'
import { CreatePetDto } from './dto/create-pet.dto'
import { UpdatePetDto } from './dto/update-pet.dto'
import { Auth } from '@/decorators/auth.decorator'
// @Auth()
@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) { }

  @Post()
  create(@Body() createPetDto: CreatePetDto) {
    return this.petService.create(createPetDto)
  }

  @Get()
  findAll(@Query() Query: Record<string, any>) {
    return this.petService.findAll(Query)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petService.findOne(+id)
  }
  @Auth()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    return this.petService.update(+id, updatePetDto)
  }
  @Auth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petService.remove(+id)
  }
}
