import { IsNotEmpty } from 'class-validator'
import { IsExistsRule } from '@/common/rules/is-exists.rule'
export class UpdateAuthDto {
    @IsNotEmpty({ message: '姓名不能为空' })
    @IsExistsRule('user', { message: '用户已经注册' })
    name: string
    @IsNotEmpty({ message: '密码不能为空' })
    password: string
}
