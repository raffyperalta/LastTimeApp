import { Body, Controller, Param, Post } from '@nestjs/common';
import { RecordService } from './record.service';

@Controller('record')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}
  @Post()
  async createRecord(@Body() data: { activityId: number; userId: number; data: any }) {
    return this.recordService.createRecord(data.activityId, data.userId, data.data);
  }

  async findLatestRecordByActivityId(@Param('activityId') activityId: number) {
    return this.recordService.findLatestRecordByActivityId(activityId);
  }

  async updateRecord(@Param('id') id: number, @Body() data: any) {
    return this.recordService.updateRecord(id, data);
  }
}
