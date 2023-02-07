import { NestFactory } from '@nestjs/core'
// import validator from 'validator';
import { AppModule } from './app.module'
import { Validate } from './common/validate'
import { TransformInterceptor } from './response.inteceptor'
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new Validate())
  app.useGlobalInterceptors(new TransformInterceptor())
  await app.listen(3030)
}
bootstrap()
