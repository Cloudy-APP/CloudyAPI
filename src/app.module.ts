import { UsersModule } from './modules/users/users.module'
import { FilesModule } from './modules/files/files.module'
import { AuthModule } from './modules/auth/auth.module'
import { Module } from '@nestjs/common'

@Module({
  imports: [UsersModule, FilesModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
