import { PartialType } from '@nestjs/mapped-types';
import { CreateCattypeDto } from './create-cattype.dto';

export class UpdateCattypeDto extends PartialType(CreateCattypeDto) {}
