import { Auth } from '@/decorators/auth.decorator'
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { CattypeService } from './cattype.service'
import { CreateCattypeDto } from './dto/create-cattype.dto'
import { UpdateCattypeDto } from './dto/update-cattype.dto'

@Controller('cattype')
export class CattypeController {
  constructor(private readonly cattypeService: CattypeService) { }

  @Get('all')
  findType() {
    return this.cattypeService.findType()
  }

  @Post()
  @Auth()
  create(@Body() createCattypeDto: CreateCattypeDto) {
    return this.cattypeService.create(createCattypeDto)
  }
  @Auth()
  @Get()
  findAll() {
    return this.cattypeService.findAll()
  }
  @Auth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cattypeService.findOne(+id)
  }
  @Auth()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCattypeDto: UpdateCattypeDto) {
    return this.cattypeService.update(+id, updateCattypeDto)
  }
  @Auth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cattypeService.remove(+id)
  }
}
