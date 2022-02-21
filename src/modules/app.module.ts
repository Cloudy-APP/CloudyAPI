import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { UploadModule } from './upload/upload.module'
import { UsersModule } from './users/users.module'
import { FilesModule } from './files/files.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URL),

    AuthModule,
    UsersModule,
    UploadModule,
    FilesModule,
  ],
})
export class AppModule {}
