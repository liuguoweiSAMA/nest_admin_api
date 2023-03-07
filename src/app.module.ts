import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { PrismaModule } from './prisma/prisma.module'
import { WorkspaceModule } from './workspace/workspace.module'
import { LeaveWordModule } from './leave-word/leave-word.module'
import { CattypeModule } from './cattype/cattype.module'
import { PetModule } from './pet/pet.module'
import { UploadModule } from './upload/upload.module'

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    WorkspaceModule,
    LeaveWordModule,
    CattypeModule,
    PetModule,
    UploadModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
