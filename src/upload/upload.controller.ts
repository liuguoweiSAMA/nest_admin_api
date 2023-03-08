import { Controller, Post, UploadedFile } from '@nestjs/common'
import { image } from './upload'
import { UploadService } from './upload.service'
@Controller('upload')
export class UploadController {
    constructor(private readonly uploadService: UploadService) { }
    @Post('image')
    @image()
    image(@UploadedFile() file: Express.Multer.File) {
        // console.log(file)
        return this.uploadService.create(file)
        // return {
        //     url: `http://localhost:3000/${file.path}`,
        // }
    }
}
