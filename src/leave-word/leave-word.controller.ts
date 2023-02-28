import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { LeaveWordService } from './leave-word.service'
import { CreateLeaveWordDto } from './dto/create-leave-word.dto'
import { UpdateLeaveWordDto } from './dto/update-leave-word.dto'
import { Auth } from '@/decorators/auth.decorator'
@Controller('leaveWord')
export class LeaveWordController {
  constructor(private readonly leaveWordService: LeaveWordService) { }

  @Auth()
  @Post()
  create(@Body() createLeaveWordDto: CreateLeaveWordDto) {
    return this.leaveWordService.create(createLeaveWordDto)
  }

  @Get()
  findAll() {
    return this.leaveWordService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leaveWordService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLeaveWordDto: UpdateLeaveWordDto) {
    return this.leaveWordService.update(+id, updateLeaveWordDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leaveWordService.remove(+id)
  }
}
