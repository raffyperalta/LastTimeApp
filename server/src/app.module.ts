import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ActivityService } from './activity/activity.service';
import { ActivityModule } from './activity/activity.module';
import { RecordModule } from './record/record.module';

@Module({
  imports: [UserModule, ActivityModule, RecordModule],
  controllers: [AppController],
  providers: [AppService, ActivityService],
})
export class AppModule {}
