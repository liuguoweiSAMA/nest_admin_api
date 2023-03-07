import { Auth } from '@/decorators/auth.decorator'
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { CattypeService } from './cattype.service'
import { CreateCattypeDto } from './dto/create-cattype.dto'
import { UpdateCattypeDto } from './dto/update-cattype.dto'

@Auth()
@Controller('cattype')
export class CattypeController {
  constructor(private readonly cattypeService: CattypeService) { }

  @Post()
  create(@Body() createCattypeDto: CreateCattypeDto) {
    return this.cattypeService.create(createCattypeDto)
  }
  @Get()
  findAll() {
    return this.cattypeService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cattypeService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCattypeDto: UpdateCattypeDto) {
    return this.cattypeService.update(+id, updateCattypeDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cattypeService.remove(+id)
  }
}
