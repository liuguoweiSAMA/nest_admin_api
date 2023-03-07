import { IsNotExistsRule } from '@/common/rules/is-not-exists.rule'
import { IsNotEmpty } from 'class-validator'

export class CreateCattypeDto {
    @IsNotEmpty({ message: '类别不能为空' })
    @IsNotExistsRule('CatType', { message: '类别已经注册' })
    name: string
}
