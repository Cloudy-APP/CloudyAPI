import { UploadModule } from './upload/upload.module'
import { UsersModule } from './users/users.module'
import { FilesModule } from './files/files.module'
import { AuthModule } from './auth/auth.module'
import { Module } from '@nestjs/common'

@Module({
  imports: [UploadModule, UsersModule, FilesModule, AuthModule],
})
export class AppModule {}
