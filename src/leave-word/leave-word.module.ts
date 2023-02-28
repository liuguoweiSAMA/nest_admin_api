import { Module } from '@nestjs/common';
import { LeaveWordService } from './leave-word.service';
import { LeaveWordController } from './leave-word.controller';

@Module({
  controllers: [LeaveWordController],
  providers: [LeaveWordService]
})
export class LeaveWordModule {}
