import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { PrismaModule } from './prisma/prisma.module'
import { WorkspaceModule } from './workspace/workspace.module'
import { LeaveWordModule } from './leave-word/leave-word.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    WorkspaceModule,
    LeaveWordModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
