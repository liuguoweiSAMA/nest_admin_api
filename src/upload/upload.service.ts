import { Injectable } from '@nestjs/common'

@Injectable()
export class UploadService {
    async create(file: Express.Multer.File) {
        console.log(file)
    }
}
