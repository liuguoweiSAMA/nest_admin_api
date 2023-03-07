import { Module } from '@nestjs/common';
import { CattypeService } from './cattype.service';
import { CattypeController } from './cattype.controller';

@Module({
  controllers: [CattypeController],
  providers: [CattypeService]
})
export class CattypeModule {}
