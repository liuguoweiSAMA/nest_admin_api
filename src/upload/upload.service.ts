/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as qiniu from 'qiniu'
import * as fs from 'fs'

@Injectable()
export class UploadService {
    constructor(private config: ConfigService) { }
    async create(file: Express.Multer.File) {
        console.log(file)
        const accessKey = this.config.get('accessKey')
        const secretKey = this.config.get('secretKey')
        const options = {
            scope: 'cat-np',
        }
        const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
        const putPolicy = new qiniu.rs.PutPolicy(options)
        const uploadToken = putPolicy.uploadToken(mac)
        return uploadToken
        // const config = new qiniu.conf.Config();
        // const formUploader = new qiniu.form_up.FormUploader(config);
        // const putExtra = new qiniu.form_up.PutExtra();
        // // const readableStream = file.buffer;
        // const readableStream = fs.createReadStream();
        // const key = file.originalname
        // console.log(uploadToken)
        // formUploader.putStream(uploadToken, key, readableStream, putExtra, function (respErr,
        //     respBody, respInfo) {
        //     if (respErr) {
        //         throw respErr;
        //     }
        //     if (respInfo.statusCode == 200) {
        //         console.log(respBody);
        //     } else {
        //         console.log(respInfo.statusCode);
        //         console.log(respBody);
        //     }
        // });
        // console.log(uploadToken)

    }
}
