import { IsNotEmpty } from 'class-validator'

export class CreateWorkspaceDto {
    @IsNotEmpty({ message: '素材不能为空' })
    materials: string[]

    @IsNotEmpty({ message: '主播不能为空' })
    anchor: {
        formTv: number
        formRoom: string | number
    }

    @IsNotEmpty({ message: '屏幕方向不能为空' })
    // 屏幕方向
    screenOrientation: number

    @IsNotEmpty({ message: '游戏类型不能为空' })
    //游戏类型
    getGameType: number

    @IsNotEmpty({ message: '创作方向不能为空' })
    // 创作方向
    creationType: number

    @IsNotEmpty({ message: '具体要求不能为空' })
    //具体要求
    content: string
}
