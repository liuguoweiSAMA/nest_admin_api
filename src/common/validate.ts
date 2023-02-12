import { HttpException, HttpStatus, ValidationPipe } from '@nestjs/common'
import { ValidationError } from 'class-validator'
export class Validate extends ValidationPipe {
  protected flattenValidationErrors(validationError: ValidationError[]): string[] {
    const messagesInfo = {}
    let message = ''
    validationError.forEach((error) => {
      console.log(error.property)
      console.log(Object.values(error.constraints)[0])
      messagesInfo[error.property] = Object.values(error.constraints)[0]
      if (!message) message = Object.values(error.constraints)[0]
    })
    throw new HttpException({ code: 201, message, status: 'error' }, HttpStatus.OK)
    // return []
  }
}
