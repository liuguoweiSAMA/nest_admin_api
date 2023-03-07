import { IsNotEmpty } from 'class-validator'

export class CreatePetDto {
    @IsNotEmpty({ message: '名字不能为空' })
    name: string
    // 图片
    @IsNotEmpty({ message: '图片不能为空' })
    img: string

    // 描述
    @IsNotEmpty({ message: '描述不能为空' })
    description: string

    // 毛长
    @IsNotEmpty({ message: '毛长不能为空' })
    weight: number

    @IsNotEmpty({ message: '最小体重不能为空' })
    // 平均最大体重
    minhair: string

    @IsNotEmpty({ message: '最大体重不能为空' })
    // 平均最大体重
    maxhair: string

    @IsNotEmpty({ message: '类别不能为空' })
    catTypeId: number
}
