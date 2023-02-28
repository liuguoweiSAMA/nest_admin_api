import { PartialType } from '@nestjs/mapped-types';
import { CreateLeaveWordDto } from './create-leave-word.dto';

export class UpdateLeaveWordDto extends PartialType(CreateLeaveWordDto) {}
