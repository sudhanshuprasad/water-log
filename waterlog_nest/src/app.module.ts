import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [
  //   ConfigModule.forRoot({
  //   isGlobal: true,
  // }),
  AuthModule,
  UserModule,
  BookmarkModule],

  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
