import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
// import { Reflector } from '@nestjs/core'
import { user } from '@prisma/client'

@Injectable()
export class Authid implements CanActivate {
  canActivate(context: ExecutionContext): any {
    const user = context.switchToHttp().getRequest().user as user
    // const roles = this.reflector.getAllAndMerge<Role[]>('roles', [context.getHandler(), context.getClass()])
    // console.log(roles)
    // console.log(user)
    // return user
    return 11111
  }
}
