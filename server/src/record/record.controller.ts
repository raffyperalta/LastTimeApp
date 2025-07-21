import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { RecordService } from './record.service';

@Controller('record')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}
  @Post()
  async createRecord(@Body() data: { activityId: number; userId: number; data: any }) {
    return this.recordService.createRecord(data.activityId, data.userId, data.data);
  }

  @Get('latest/:activityId')
  async findLatestRecordByActivityId(@Param('activityId') activityId: number) {
    return this.recordService.findLatestRecordByActivityId(activityId);
  }

  @Patch(':id')
  async updateRecord(@Param('id') id: number, @Body() data: any) {
    return this.recordService.updateRecord(id, data);
  }
}
