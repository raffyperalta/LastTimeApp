import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ActivityService } from './activity.service';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Post()
  async createActivity(@Body() data: { userId: number; name: string }) {
    return this.activityService.createActivity(data.userId, data.name);
  }

  @Get('user/:userId')
  findActivitiesByUserId(@Param('userId') userId: number) {
    return this.activityService.findActivitiesByUserId(userId);
  }

  @Get()
  findAllActivities() {
    return this.activityService.findAllActivities();
  }

  @Get(':id')
  findActivityById(@Param('id') id: number) {
    return this.activityService.findOneActivity(id);
  }

  @Patch(':id')
  async updateActivity(@Param('id') id: number, @Body() data: any) {
    return this.activityService.updateActivity(id, data);
  }
  
}
